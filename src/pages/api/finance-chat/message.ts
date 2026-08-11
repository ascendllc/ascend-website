import type { APIRoute } from "astro";
import { getOpenAI } from "../../../lib/openai";
import { FINANCE_SYSTEM_PROMPT } from "../../../lib/financeSystemPrompt";

export const prerender = false;

const MAX_HISTORY = 20;
const MAX_MESSAGE_LENGTH = 4000;

interface IncomingMessage {
	role: "user" | "assistant";
	content: string;
}

function isValidHistory(value: unknown): value is IncomingMessage[] {
	return (
		Array.isArray(value) &&
		value.length > 0 &&
		value.every(
			(m) =>
				m &&
				typeof m === "object" &&
				(m.role === "user" || m.role === "assistant") &&
				typeof m.content === "string" &&
				m.content.length > 0 &&
				m.content.length <= MAX_MESSAGE_LENGTH
		)
	);
}

// Very simple in-memory rate limit. Resets on cold start, which is fine here,
// it just needs to blunt obvious abuse, not be airtight.
const requestLog = new Map<string, number[]>();
const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 60_000; // per minute

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

	const { messages } = body as { messages?: unknown };
	if (!isValidHistory(messages)) {
		return new Response(JSON.stringify({ error: "Invalid messages payload" }), { status: 400 });
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

	const trimmedHistory = messages.slice(-MAX_HISTORY);

	let stream;
	try {
		stream = await getOpenAI().chat.completions.create({
			model: "gpt-5.1",
			messages: [{ role: "system", content: FINANCE_SYSTEM_PROMPT }, ...trimmedHistory],
			stream: true,
		});
	} catch (err) {
		console.error("OpenAI request failed", err);
		return new Response(JSON.stringify({ error: "The WAFS Assistant is unavailable right now, please try again shortly." }), {
			status: 502,
		});
	}

	const encoder = new TextEncoder();
	const body_ = new ReadableStream({
		async start(controller) {
			try {
				for await (const chunk of stream) {
					const delta = chunk.choices[0]?.delta?.content ?? "";
					if (delta) {
						controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
					}
				}
			} catch (err) {
				console.error("Stream error", err);
			} finally {
				controller.enqueue(encoder.encode("data: [DONE]\n\n"));
				controller.close();
			}
		},
	});

	return new Response(body_, {
		headers: {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			Connection: "keep-alive",
		},
	});
};
