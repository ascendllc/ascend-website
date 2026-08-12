import { useEffect, useRef, useState } from "react";
import { site } from "../../data/site";
import { getRecaptchaToken } from "../../lib/recaptchaClient";

interface DisplayMessage {
	role: "user" | "assistant";
	content: string;
}

interface CapturedLawLead {
	name: string;
	email: string;
	matter: string;
}

const WELCOME_MESSAGE =
	"Hello! I'm the Washington Law virtual assistant. I can help answer questions about our practice areas, attorneys, or help you determine if you might have a legal matter worth discussing. How can I help you today?";

const BOOKING_LINK = site.booking;

const LEAD_MARKER_RE = /\[LEAD_CAPTURED\](\{[\s\S]*\})\s*$/;

export default function LawChatWidget() {
	const [isOpen, setIsOpen] = useState(false);
	const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
	const [messages, setMessages] = useState<DisplayMessage[]>([]);
	const [input, setInput] = useState("");
	const [isStreaming, setIsStreaming] = useState(false);
	const [lead, setLead] = useState<CapturedLawLead | null>(null);
	const [leadSent, setLeadSent] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
	}, [messages, isStreaming]);

	function openWidget() {
		setIsOpen(true);
		if (!hasOpenedOnce) {
			setHasOpenedOnce(true);
			setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
		}
	}

	async function handleSend() {
		const text = input.trim();
		if (!text || isStreaming || lead) return;

		const nextMessages: DisplayMessage[] = [...messages, { role: "user", content: text }];
		setMessages(nextMessages);
		setInput("");
		setIsStreaming(true);

		try {
			const res = await fetch("/api/law-chat/message", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: nextMessages }),
			});

			if (!res.ok || !res.body) {
				throw new Error("Request failed");
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let full = "";

			setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

			let buffer = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });

				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";

				for (const line of lines) {
					if (!line.startsWith("data: ")) continue;
					const payload = line.slice(6);
					if (payload === "[DONE]") continue;
					try {
						const { delta } = JSON.parse(payload) as { delta: string };
						full += delta;
						const visible = full.replace(LEAD_MARKER_RE, "").trimEnd();
						setMessages((prev) => {
							const copy = [...prev];
							copy[copy.length - 1] = { role: "assistant", content: visible };
							return copy;
						});
					} catch {
						// ignore malformed chunk
					}
				}
			}

			const match = full.match(LEAD_MARKER_RE);
			if (match) {
				try {
					const parsedLead = JSON.parse(match[1]) as CapturedLawLead;
					if (parsedLead.name && parsedLead.email && parsedLead.matter) {
						setLead(parsedLead);
					}
				} catch {
					// marker present but malformed, ignore and let the conversation continue
				}
			}
		} catch {
			setMessages((prev) => [
				...prev,
				{ role: "assistant", content: "Something went wrong on my end, mind trying that again in a moment?" },
			]);
		} finally {
			setIsStreaming(false);
		}
	}

	useEffect(() => {
		if (!lead || leadSent) return;
		setLeadSent(true);
		(async () => {
			try {
				const recaptchaToken = await getRecaptchaToken("law_chat_lead");
				await fetch("/api/law-chat/lead", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ lead, transcript: messages, recaptchaToken }),
				});
			} catch {
				// Non-fatal from the visitor's perspective; the follow-up isn't blocked on this UI.
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lead]);

	function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}

	if (!isOpen) {
		return (
			<button
				type="button"
				aria-label="Chat with Washington Law Assistant"
				onClick={openWidget}
				className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-all duration-200 hover:scale-105 hover:bg-accent/90 active:scale-95"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-white"
					aria-hidden="true"
				>
					<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
				</svg>
			</button>
		);
	}

	return (
		<div className="fixed bottom-6 right-6 z-50 flex h-[min(600px,80vh)] w-[min(380px,90vw)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
			<div className="flex items-center justify-between bg-primary px-4 py-3">
				<div>
					<p className="font-medium text-white">Washington Law Assistant</p>
					<p className="text-xs text-white/70">Virtual Assistant</p>
				</div>
				<button
					type="button"
					aria-label="Close chat"
					onClick={() => setIsOpen(false)}
					className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</div>

			<div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
				{messages.map((m, i) => (
					<div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
						<div
							className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
								m.role === "user" ? "bg-accent text-white" : "bg-gray-100 text-gray-800"
							}`}
						>
							{m.content || (isStreaming && i === messages.length - 1 ? "..." : "")}
						</div>
					</div>
				))}

				{lead && (
					<div className="rounded-2xl border border-gray-200 bg-gray-100 px-3 py-3 text-sm text-gray-800">
						<p className="font-medium">Thanks, {lead.name.split(" ")[0]}. Someone from the team will be in touch shortly.</p>
						<p className="mt-1 text-gray-500">
							This Washington Law site is a demo built by Ascend Consulting. If you'd like an AI assistant like this
							one for your own business,{" "}
							<a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline">
								book a time with Brad
							</a>
							.
						</p>
					</div>
				)}
			</div>

			<div className="border-t border-gray-200 p-3">
				<div className="flex items-end gap-2">
					<textarea
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						disabled={isStreaming || !!lead}
						placeholder={lead ? "Conversation complete" : "Type a message..."}
						rows={1}
						className="max-h-24 flex-1 resize-none rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-accent disabled:opacity-60"
					/>
					<button
						type="button"
						onClick={handleSend}
						disabled={isStreaming || !input.trim() || !!lead}
						aria-label="Send message"
						className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent/90 disabled:opacity-40"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="22" y1="2" x2="11" y2="13"></line>
							<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
