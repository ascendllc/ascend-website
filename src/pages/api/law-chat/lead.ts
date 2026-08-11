import type { APIRoute } from "astro";
import { sendLawChatLeadEmail, type CapturedLawLead, type ChatMessage } from "../../../lib/email";

export const prerender = false;

function isValidLead(value: unknown): value is CapturedLawLead {
	return (
		!!value &&
		typeof value === "object" &&
		typeof (value as CapturedLawLead).name === "string" &&
		typeof (value as CapturedLawLead).email === "string" &&
		typeof (value as CapturedLawLead).matter === "string" &&
		/^\S+@\S+\.\S+$/.test((value as CapturedLawLead).email)
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

export const POST: APIRoute = async ({ request }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
	}

	const { lead, transcript } = body as { lead?: unknown; transcript?: unknown };

	if (!isValidLead(lead) || !isValidTranscript(transcript)) {
		return new Response(JSON.stringify({ error: "Invalid lead payload" }), { status: 400 });
	}

	try {
		await sendLawChatLeadEmail(lead, transcript);
	} catch (err) {
		console.error("Failed to send law chat lead email", err);
		return new Response(JSON.stringify({ error: "Failed to send lead notification" }), { status: 502 });
	}

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
