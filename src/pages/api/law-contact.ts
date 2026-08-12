import type { APIRoute } from "astro";
import { sendLawContactEmail, type IntakeField } from "../../lib/email";
import { verifyRecaptcha } from "../../lib/recaptcha";

export const prerender = false;

const MAX_VALUE_LENGTH = 5000;

function isValidFields(value: unknown): value is IntakeField[] {
	return (
		Array.isArray(value) &&
		value.length > 0 &&
		value.length <= 10 &&
		value.every(
			(f) =>
				f &&
				typeof f === "object" &&
				typeof f.label === "string" &&
				f.label.length > 0 &&
				f.label.length <= 100 &&
				typeof f.value === "string" &&
				f.value.length <= MAX_VALUE_LENGTH
		)
	);
}

// Very simple in-memory rate limit, same pattern as /api/contact-form. Resets
// on cold start; just needs to blunt obvious abuse.
const requestLog = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60_000;

function isRateLimited(ip: string) {
	const now = Date.now();
	const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
	timestamps.push(now);
	requestLog.set(ip, timestamps);
	return timestamps.length > RATE_LIMIT;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
	}

	const { fields, website, recaptchaToken } = body as { fields?: unknown; website?: unknown; recaptchaToken?: unknown };

	// Honeypot: a hidden field real visitors never fill in.
	if (typeof website === "string" && website.trim().length > 0) {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	let ip = "unknown";
	try {
		ip = clientAddress ?? "unknown";
	} catch {
		// clientAddress can throw in some local/dev setups; fall back silently.
	}
	if (isRateLimited(ip)) {
		return new Response(JSON.stringify({ error: "Too many requests, slow down." }), { status: 429 });
	}

	if (!(await verifyRecaptcha(recaptchaToken, ip))) {
		return new Response(JSON.stringify({ error: "reCAPTCHA verification failed. Please try again." }), { status: 400 });
	}

	if (!isValidFields(fields)) {
		return new Response(JSON.stringify({ error: "Invalid contact form payload" }), { status: 400 });
	}

	const firstNameField = fields.find((f) => f.label === "First Name");
	const emailField = fields.find((f) => f.label === "Email Address");
	if (!firstNameField?.value.trim() || !emailField?.value.trim()) {
		return new Response(JSON.stringify({ error: "Name and email are required" }), { status: 400 });
	}

	try {
		await sendLawContactEmail(fields);
	} catch (err) {
		console.error("Failed to send law contact form email", err);
		return new Response(JSON.stringify({ error: "Failed to send your message, please try again shortly." }), { status: 502 });
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
