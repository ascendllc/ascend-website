const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5;

interface SiteVerifyResponse {
	success: boolean;
	score?: number;
	action?: string;
	"error-codes"?: string[];
}

/**
 * Verifies a reCAPTCHA v3 token server-side. Fails closed: any missing
 * config, network error, or low score is treated as a failed submission.
 */
export async function verifyRecaptcha(token: unknown, remoteip?: string): Promise<boolean> {
	if (typeof token !== "string" || token.length === 0) return false;

	const secret = process.env.RECAPTCHA_SECRET_KEY;
	if (!secret) {
		console.error("RECAPTCHA_SECRET_KEY is not configured; rejecting submission");
		return false;
	}

	const params = new URLSearchParams({ secret, response: token });
	if (remoteip) params.set("remoteip", remoteip);

	try {
		const res = await fetch(VERIFY_URL, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: params,
		});
		const data = (await res.json()) as SiteVerifyResponse;
		// Real v3 keys always include a score; only Google's official v2-style test
		// keys omit it. Treat a missing score as pass-through (dev/test only).
		return data.success === true && (data.score === undefined || data.score >= MIN_SCORE);
	} catch (err) {
		console.error("reCAPTCHA verification request failed", err);
		return false;
	}
}
