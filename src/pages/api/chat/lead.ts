import type { APIRoute } from "astro";
import { sendLeadEmail, type CapturedLead, type ChatMessage } from "../../../lib/email";
import { verifyRecaptcha } from "../../../lib/recaptcha";

export const prerender = false;

function isValidLead(value: unknown): value is CapturedLead {
	return (
		!!value &&
		typeof value === "object" &&
		typeof (value as CapturedLead).name === "string" &&
		typeof (value as CapturedLead).email === "string" &&
		typeof (value as CapturedLead).org === "string" &&
		/^\S+@\S+\.\S+$/.test((value as CapturedLead).email)
	);
}

function isValidTranscript(value: unknown): value is ChatMessage[] {
	return (
		Array.isArray(value) &&
		value.every(
			(m) =>
				m &&
				typeof m === "object" &&
				(m.role === "user" || m.role === "assistant") &&
				typeof m.content === "string"
		)
	);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
	}

	const { lead, transcript, recaptchaToken } = body as { lead?: unknown; transcript?: unknown; recaptchaToken?: unknown };

	let ip = "unknown";
	try {
		ip = clientAddress ?? "unknown";
	} catch {
		// clientAddress can throw in some local/dev setups; fall back silently.
	}
	if (!(await verifyRecaptcha(recaptchaToken, ip))) {
		return new Response(JSON.stringify({ error: "reCAPTCHA verification failed. Please try again." }), { status: 400 });
	}

	if (!isValidLead(lead) || !isValidTranscript(transcript)) {
		return new Response(JSON.stringify({ error: "Invalid lead payload" }), { status: 400 });
	}

	try {
		await sendLeadEmail(lead, transcript);
	} catch (err) {
		console.error("Failed to send lead email", err);
		return new Response(JSON.stringify({ error: "Failed to send lead notification" }), { status: 502 });
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
