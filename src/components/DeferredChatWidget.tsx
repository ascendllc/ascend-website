import { lazy, Suspense, useEffect, useState } from "react";

const ChatWidget = lazy(() => import("./ChatWidget"));

const TRIGGER_EVENTS: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "touchstart"];

/**
 * Keeps the chat widget's code out of the initial page bundle. It loads
 * ChatWidget.tsx only once the browser goes idle, or as soon as the visitor
 * scrolls, clicks, or taps, whichever happens first.
 */
export default function DeferredChatWidget() {
	const [shouldLoad, setShouldLoad] = useState(false);

	useEffect(() => {
		if (shouldLoad) return;

		let idleId: number | undefined;
		let timeoutId: number | undefined;

		const trigger = () => {
			setShouldLoad(true);
			cleanup();
		};

		const cleanup = () => {
			TRIGGER_EVENTS.forEach((evt) => window.removeEventListener(evt, trigger));
			if (idleId !== undefined && "cancelIdleCallback" in window) {
				window.cancelIdleCallback(idleId);
			}
			if (timeoutId !== undefined) window.clearTimeout(timeoutId);
		};

		TRIGGER_EVENTS.forEach((evt) => window.addEventListener(evt, trigger, { once: true, passive: true }));

		if ("requestIdleCallback" in window) {
			idleId = window.requestIdleCallback(trigger, { timeout: 4000 });
		} else {
			timeoutId = window.setTimeout(trigger, 2000);
		}

		return cleanup;
	}, [shouldLoad]);

	if (!shouldLoad) return null;

	return (
		<Suspense fallback={null}>
			<ChatWidget />
		</Suspense>
	);
}
