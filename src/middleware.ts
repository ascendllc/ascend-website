import { defineMiddleware } from "astro:middleware";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const COOKIE = "ascend_photos";
const SESSION_MS = 30 * 24 * 60 * 60_000;
const LOGIN_PATH = "/photos/login";
const MAX_FAILURES = 10;
const FAILURE_WINDOW_MS = 10 * 60_000;
const failures = new Map<string, { count: number; windowStart: number }>();

const digest = (value: string) => createHash("sha256").update(value).digest();
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function isProtected(pathname: string) {
	return pathname === "/photos" || pathname.startsWith("/photos/");
}

/** Only ever send people back to somewhere inside /photos after they sign in. */
function safeNext(value: unknown) {
	if (typeof value !== "string" || !value.startsWith("/photos") || value.startsWith("//") || value.includes("\\")) return "/photos";
	return value === LOGIN_PATH || value.startsWith(`${LOGIN_PATH}?`) ? "/photos" : value;
}

// The sign-in page. It sits over a blurred stand-in for the gallery, built from plain gradients;
// it never includes real photos, which stay behind the login.
const tiles = ["#8fa3d9", "#e8a07a", "#6f86c4", "#f0c9a8", "#4d62a8", "#d98b6a", "#a9b8e3", "#c27d5e", "#7d92cf", "#f2b896", "#5a70b4", "#e39c78"];
const backdrop = `<div class="backdrop" aria-hidden="true"><div class="hero"></div><div class="grid">${tiles
	.map((c) => `<i style="background:linear-gradient(135deg,${c},#2d3b8c)"></i>`)
	.join("")}</div></div><div class="veil" aria-hidden="true"></div>`;

function loginPage(next: string, error = "") {
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Photo Galleries | Ascend Consulting</title>
<style>
	* { box-sizing: border-box; }
	html, body { margin: 0; height: 100%; }
	body { font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, sans-serif; background: #1b2870; color: #1f2937; overflow: hidden; }
	.backdrop { position: fixed; inset: -80px; filter: blur(46px); transform: scale(1.1); }
	.hero { height: 34vh; min-height: 220px; background: #1b2870; }
	.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 28px; background: #f5f6fa; height: 100%; }
	.grid i { display: block; border-radius: 4px; aspect-ratio: 3 / 2; }
	.veil { position: fixed; inset: 0; background: rgba(19, 28, 82, 0.35); }
	main { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto; }
	.card { width: 100%; max-width: 24rem; background: #fff; border-radius: 6px; padding: 32px 28px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35); }
	.logo { display: block; width: 140px; height: auto; margin: 0 auto 18px; }
	h1 { margin: 0 0 6px; font-size: 1.4rem; color: #1b2870; text-align: center; }
	.lead { margin: 0 0 22px; font-size: 0.92rem; line-height: 1.5; color: #4b5563; text-align: center; }
	label { display: block; margin-bottom: 6px; font-size: 0.85rem; font-weight: 600; }
	input { display: block; width: 100%; margin-bottom: 16px; padding: 11px 12px; border: 1px solid #cbd0dc; border-radius: 4px; font: inherit; font-size: 1rem; }
	input:focus { outline: 2px solid #1b2870; outline-offset: 1px; border-color: #1b2870; }
	button { width: 100%; padding: 12px; border: 0; border-radius: 4px; background: #d1390a; color: #fff; font: inherit; font-weight: 600; cursor: pointer; }
	button:hover { opacity: 0.92; }
	.error { margin: 0 0 16px; padding: 10px 12px; border-radius: 4px; background: #fdecea; color: #9b1c0e; font-size: 0.88rem; }
	.hint { margin: 16px 0 0; font-size: 0.8rem; color: #6b7280; text-align: center; }
	@media (max-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
</style>
</head>
<body>
	${backdrop}
	<main>
		<form class="card" method="post" action="${LOGIN_PATH}">
			<img class="logo" src="/images/ascend-logo-color.webp" alt="Ascend Consulting" width="140">
			<h1>Private Photo Gallery</h1>
			<p class="lead">Enter the username and password you were given to view the photos.</p>
			${error ? `<p class="error" role="alert">${escapeHtml(error)}</p>` : ""}
			<input type="hidden" name="next" value="${escapeHtml(next)}">
			<label for="username">Username</label>
			<input id="username" name="username" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" required autofocus>
			<label for="password">Password</label>
			<input id="password" name="password" type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" required>
			<button type="submit">Sign in</button>
			<p class="hint">The username and password are case sensitive.</p>
		</form>
	</main>
</body>
</html>`;
}

function respond(status: number, body: string, contentType = "text/plain", extra: Record<string, string> = {}) {
	return new Response(body, {
		status,
		headers: {
			"Content-Type": `${contentType}; charset=utf-8`,
			"Cache-Control": "private, no-store",
			"X-Robots-Tag": "noindex, nofollow",
			...extra,
		},
	});
}

const sessionSignature = (secret: string, expires: number) => createHmac("sha256", secret).update(String(expires)).digest("base64url");

function hasValidSession(cookieHeader: string, secret: string) {
	const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
	const [expires, signature] = (match?.[1] ?? "").split(".");
	if (!expires || !signature || !/^\d+$/.test(expires) || Number(expires) < Date.now()) return false;
	return safeEqual(signature, sessionSignature(secret, Number(expires)));
}

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname, search } = context.url;
	if (!isProtected(pathname)) return next();

	// Read at request time (not build time) so the credentials never end up in the bundle.
	// They live in Vercel env vars because the GitHub repo is public.
	const expectedUser = process.env.PHOTOS_USERNAME;
	const expectedPass = process.env.PHOTOS_PASSWORD;
	if (!expectedUser || !expectedPass) {
		return respond(503, "The photo gallery isn't available right now.");
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
	// Changing any login invalidates every existing session.
	const secret = createHash("sha256").update(`ascend-photos-session|${JSON.stringify(logins)}`).digest("hex");

	const checkLogin = (user: string, pass: string) => {
		let ok = false;
		// Check every login (no early exit) so timing doesn't reveal which one matched.
		for (const [u, p] of logins) {
			const userOk = safeEqual(user, u);
			const passOk = safeEqual(pass, p);
			if (userOk && passOk) ok = true;
		}
		return ok;
	};

	let ip = "unknown";
	try {
		ip = context.clientAddress ?? "unknown";
	} catch {
		// clientAddress can be unavailable in some runtimes.
	}

	const now = Date.now();
	const record = failures.get(ip);
	const recordFailure = () => {
		const current = record && now - record.windowStart <= FAILURE_WINDOW_MS ? record : { count: 0, windowStart: now };
		current.count += 1;
		failures.set(ip, current);
	};
	const throttled = !!record && now - record.windowStart <= FAILURE_WINDOW_MS && record.count >= MAX_FAILURES;
	const tooMany = "Too many incorrect attempts. Please wait a few minutes and try again.";

	const method = context.request.method;

	// The sign-in form posts here.
	if (pathname === LOGIN_PATH && method === "POST") {
		let user = "";
		let pass = "";
		let next = "/photos";
		try {
			const form = await context.request.formData();
			user = String(form.get("username") ?? "");
			pass = String(form.get("password") ?? "");
			next = safeNext(form.get("next"));
		} catch {
			// Malformed body: treated as a failed attempt below.
		}
		if (throttled) return respond(429, loginPage(next, tooMany), "text/html");
		if (!checkLogin(user, pass)) {
			recordFailure();
			return respond(401, loginPage(next, "That username or password isn't right. Both are case sensitive, so check capital letters."), "text/html");
		}
		failures.delete(ip);
		const expires = now + SESSION_MS;
		return new Response(null, {
			status: 303,
			headers: {
				Location: next,
				"Cache-Control": "private, no-store",
				"Set-Cookie": `${COOKIE}=${expires}.${sessionSignature(secret, expires)}; Path=/photos; Max-Age=${SESSION_MS / 1000}; HttpOnly; Secure; SameSite=Lax`,
			},
		});
	}

	if (throttled) return respond(429, tooMany);

	// A valid session cookie, or HTTP Basic credentials sent directly (scripts, old bookmarks).
	let authorized = hasValidSession(context.request.headers.get("cookie") ?? "", secret);
	const header = context.request.headers.get("authorization") ?? "";
	if (!authorized && header.startsWith("Basic ")) {
		try {
			const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
			const split = decoded.indexOf(":");
			if (split >= 0) authorized = checkLogin(decoded.slice(0, split), decoded.slice(split + 1));
		} catch {
			authorized = false;
		}
		if (!authorized) recordFailure();
	}

	if (!authorized) {
		// Page loads get the sign-in form; images, downloads and the like just get a 401.
		const wantsPage = method === "GET" && (context.request.headers.get("accept") ?? "").includes("text/html");
		if (!wantsPage) return respond(401, "Sign in required.");
		return respond(401, loginPage(safeNext(`${pathname}${search}`)), "text/html");
	}

	// Signed in already: the login page itself has nothing to show.
	if (pathname === LOGIN_PATH) return Response.redirect(new URL("/photos", context.url), 303);

	const response = await next();
	// Never let the CDN cache an authenticated page and serve it to someone who hasn't logged in.
	// Responses that already opted into private (browser-only) caching, like image files, keep it.
	if (!/private/i.test(response.headers.get("Cache-Control") ?? "")) {
		response.headers.set("Cache-Control", "private, no-store");
	}
	return response;
});
