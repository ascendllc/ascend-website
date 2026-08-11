import type { APIRoute } from "astro";
import { sendIntakeEmail, type IntakeField } from "../../lib/email";

export const prerender = false;

const MAX_FIELDS = 60;
const MAX_VALUE_LENGTH = 5000;

function isValidFields(value: unknown): value is IntakeField[] {
	return (
		Array.isArray(value) &&
		value.length > 0 &&
		value.length <= MAX_FIELDS &&
		value.every(
			(f) =>
				f &&
				typeof f === "object" &&
				typeof f.label === "string" &&
				f.label.length > 0 &&
				f.label.length <= 300 &&
				typeof f.value === "string" &&
				f.value.length <= MAX_VALUE_LENGTH
		)
	);
}

// Very simple in-memory rate limit, same pattern as /api/chat/message. Resets
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

	const { fields, website } = body as { fields?: unknown; website?: unknown };

	// Honeypot: a hidden field real visitors never fill in. Bots that fill
	// every input will trip it. Pretend success so they don't learn anything.
	if (typeof website === "string" && website.trim().length > 0) {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	if (!isValidFields(fields)) {
		return new Response(JSON.stringify({ error: "Invalid intake payload" }), { status: 400 });
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

	const nameField = fields.find((f) => f.label === "Full name");
	const emailField = fields.find((f) => f.label === "Email address");
	if (!nameField?.value.trim() || !emailField?.value.trim()) {
		return new Response(JSON.stringify({ error: "Name and email are required" }), { status: 400 });
	}

	try {
		await sendIntakeEmail(fields);
	} catch (err) {
		console.error("Failed to send intake email", err);
		return new Response(JSON.stringify({ error: "Failed to send your intake form, please try again shortly." }), { status: 502 });
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
