import { defineMiddleware } from "astro:middleware";
import { createHash, timingSafeEqual } from "node:crypto";

const REALM = "Ascend Photos";
const MAX_FAILURES = 10;
const FAILURE_WINDOW_MS = 10 * 60_000;
const failures = new Map<string, { count: number; windowStart: number }>();

const digest = (value: string) => createHash("sha256").update(value).digest();
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));

function isProtected(pathname: string) {
	return pathname === "/photos" || pathname.startsWith("/photos/");
}

// Shown behind the browser's own sign-in prompt (and after Cancel). It is a blurred stand-in for the
// gallery, built from plain gradients; it never includes real photos, which stay behind the login.
const tiles = ["#8fa3d9", "#e8a07a", "#6f86c4", "#f0c9a8", "#4d62a8", "#d98b6a", "#a9b8e3", "#c27d5e", "#7d92cf", "#f2b896", "#5a70b4", "#e39c78"];
const signInPage = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Photo Galleries | Ascend Consulting</title>
<style>
	* { box-sizing: border-box; }
	html, body { margin: 0; height: 100%; }
	body { font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, sans-serif; background: #1b2870; color: #fff; overflow: hidden; }
	.backdrop { position: fixed; inset: -80px; filter: blur(46px); transform: scale(1.1); }
	.hero { height: 34vh; min-height: 220px; background: #1b2870; }
	.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 28px; background: #f5f6fa; height: 100%; }
	.grid i { display: block; border-radius: 4px; aspect-ratio: 3 / 2; }
	.veil { position: fixed; inset: 0; background: rgba(19, 28, 82, 0.35); }
	main { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; padding: 24px; padding-top: 22vh; text-align: center; }
	.card { max-width: 26rem; }
	img { width: 150px; height: auto; margin-bottom: 20px; }
	h1 { margin: 0 0 10px; font-size: 1.6rem; }
	p { margin: 0; line-height: 1.6; color: rgba(255, 255, 255, 0.88); }
	a { color: #fff; font-weight: 600; }
	@media (max-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
</style>
</head>
<body>
	<div class="backdrop" aria-hidden="true">
		<div class="hero"></div>
		<div class="grid">${tiles.map((c) => `<i style="background:linear-gradient(135deg,${c},#2d3b8c)"></i>`).join("")}</div>
	</div>
	<div class="veil" aria-hidden="true"></div>
	<main>
		<div class="card">
			<img src="/images/ascend-logo-white.webp" alt="Ascend Consulting" width="150">
			<h1>Private Photo Gallery</h1>
			<p>Please enter the username and password you were given to view the photos.</p>
			<p style="margin-top:14px;font-size:.9rem">Don't see a sign-in box? <a href="/photos">Try again</a>. The username and password are case sensitive.</p>
		</div>
	</main>
</body>
</html>`;

function challenge(status: 401 | 429 | 503, message: string) {
	const headers: Record<string, string> = {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "private, no-store",
		"X-Robots-Tag": "noindex, nofollow",
	};
	if (status === 401) {
		headers["WWW-Authenticate"] = `Basic realm="${REALM}", charset="UTF-8"`;
		headers["Content-Type"] = "text/html; charset=utf-8";
		return new Response(signInPage, { status, headers });
	}
	return new Response(message, { status, headers });
}

export const onRequest = defineMiddleware(async (context, next) => {
	if (!isProtected(context.url.pathname)) return next();

	// Read at request time (not build time) so the credentials never end up in the bundle.
	// They live in Vercel env vars because the GitHub repo is public.
	const expectedUser = process.env.PHOTOS_USERNAME;
	const expectedPass = process.env.PHOTOS_PASSWORD;
	if (!expectedUser || !expectedPass) {
		return challenge(503, "The photo gallery isn't available right now.");
	}
	// Optional extra logins (e.g. lowercase variants for people who trip over case sensitivity),
	// as a JSON array of "username:password" strings in PHOTOS_EXTRA_LOGINS.
	const logins: [string, string][] = [[expectedUser, expectedPass]];
	try {
		for (const entry of JSON.parse(process.env.PHOTOS_EXTRA_LOGINS ?? "[]") as unknown[]) {
			const at = typeof entry === "string" ? entry.indexOf(":") : -1;
			if (at > 0) logins.push([(entry as string).slice(0, at), (entry as string).slice(at + 1)]);
		}
	} catch {
		console.error("[photos] PHOTOS_EXTRA_LOGINS is not valid JSON; ignoring it.");
	}

	let ip = "unknown";
	try {
		ip = context.clientAddress ?? "unknown";
	} catch {
		// clientAddress can be unavailable in some runtimes.
	}

	const now = Date.now();
	const record = failures.get(ip);
	if (record && now - record.windowStart <= FAILURE_WINDOW_MS && record.count >= MAX_FAILURES) {
		return challenge(429, "Too many incorrect attempts. Please wait a few minutes and try again.");
	}

	const header = context.request.headers.get("authorization") ?? "";
	let authorized = false;
	if (header.startsWith("Basic ")) {
		try {
			const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
			const split = decoded.indexOf(":");
			if (split >= 0) {
				const user = decoded.slice(0, split);
				const pass = decoded.slice(split + 1);
				// Check every login (no early exit) so timing doesn't reveal which one matched.
				for (const [u, p] of logins) {
					const userOk = safeEqual(user, u);
					const passOk = safeEqual(pass, p);
					if (userOk && passOk) authorized = true;
				}
			}
		} catch {
			authorized = false;
		}
	}

	if (!authorized) {
		if (header) {
			const current = record && now - record.windowStart <= FAILURE_WINDOW_MS ? record : { count: 0, windowStart: now };
			current.count += 1;
			failures.set(ip, current);
		}
		return challenge(401, "Password required.");
	}

	failures.delete(ip);
	const response = await next();
	// Never let the CDN cache an authenticated page and serve it to someone who hasn't logged in.
	// Responses that already opted into private (browser-only) caching, like image files, keep it.
	if (!/private/i.test(response.headers.get("Cache-Control") ?? "")) {
		response.headers.set("Cache-Control", "private, no-store");
	}
	return response;
});
