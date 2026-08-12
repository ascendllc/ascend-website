declare global {
	interface Window {
		grecaptcha?: {
			ready: (cb: () => void) => void;
			execute: (siteKey: string, options: { action: string }) => Promise<string>;
		};
	}
}

const SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY as string | undefined;

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
	if (scriptPromise) return scriptPromise;
	scriptPromise = new Promise((resolve, reject) => {
		if (window.grecaptcha) {
			resolve();
			return;
		}
		const script = document.createElement("script");
		script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
		document.head.appendChild(script);
	});
	return scriptPromise;
}

/** Fetches a reCAPTCHA v3 token for the given action. Call right before submitting a form. */
export async function getRecaptchaToken(action: string): Promise<string> {
	if (!SITE_KEY) throw new Error("reCAPTCHA is not configured");
	await loadScript();
	return new Promise((resolve, reject) => {
		window.grecaptcha!.ready(() => {
			window.grecaptcha!.execute(SITE_KEY, { action }).then(resolve).catch(reject);
		});
	});
}
