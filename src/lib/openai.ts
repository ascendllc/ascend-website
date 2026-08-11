import OpenAI from "openai";

let client: OpenAI | null = null;

/** Lazily construct the OpenAI client so a missing key fails at request time
 * with a clear error instead of crashing the whole server on boot. */
export function getOpenAI() {
	if (!client) {
		const apiKey = process.env.OPENAI_API_KEY;
		if (!apiKey) {
			throw new Error("OPENAI_API_KEY is not set");
		}
		client = new OpenAI({ apiKey });
	}
	return client;
}
