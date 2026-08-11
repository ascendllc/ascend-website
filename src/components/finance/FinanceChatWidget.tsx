import { useEffect, useRef, useState } from "react";

interface DisplayMessage {
	role: "user" | "assistant";
	content: string;
}

interface CapturedLead {
	name: string;
	email: string;
	need: string;
}

const WELCOME_MESSAGE =
	"Hi! I'm here to help with any questions about our accounting and financial services. What brings you here today?";

const CONTACT_LINK = "/finance/contact";

const LEAD_MARKER_RE = /\[LEAD_CAPTURED\](\{[\s\S]*\})\s*$/;

export default function FinanceChatWidget() {
	const [isOpen, setIsOpen] = useState(false);
	const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
	const [messages, setMessages] = useState<DisplayMessage[]>([]);
	const [input, setInput] = useState("");
	const [isStreaming, setIsStreaming] = useState(false);
	const [lead, setLead] = useState<CapturedLead | null>(null);
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
			const res = await fetch("/api/finance-chat/message", {
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
					const parsedLead = JSON.parse(match[1]) as CapturedLead;
					if (parsedLead.name && parsedLead.email && parsedLead.need) {
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
		fetch("/api/finance-chat/lead", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ lead, transcript: messages }),
		}).catch(() => {
			// Non-fatal from the visitor's perspective; the follow-up isn't blocked on this UI.
		});
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
				aria-label="Chat with WAFS Assistant"
				onClick={openWidget}
				className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wafs-gold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-wafs-gold/90 active:scale-95"
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
					className="text-wafs-forest"
					aria-hidden="true"
				>
					<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
				</svg>
			</button>
		);
	}

	return (
		<div className="fixed bottom-6 right-6 z-50 flex h-[min(600px,80vh)] w-[min(380px,90vw)] flex-col overflow-hidden rounded-2xl border border-[#d4e6dc] bg-white shadow-2xl">
			<div className="flex items-center justify-between bg-wafs-forest px-4 py-3">
				<div>
					<p className="font-medium text-warmwhite">WAFS Assistant</p>
					<p className="text-xs text-warmwhite/70">Washington Accounting & Financial Services</p>
				</div>
				<button
					type="button"
					aria-label="Close chat"
					onClick={() => setIsOpen(false)}
					className="rounded-full p-1 text-warmwhite/80 transition hover:bg-white/10 hover:text-warmwhite"
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
								m.role === "user" ? "bg-wafs-forest text-warmwhite" : "bg-[#f0ede8] text-nearblack"
							}`}
						>
							{m.content || (isStreaming && i === messages.length - 1 ? "..." : "")}
						</div>
					</div>
				))}

				{lead && (
					<div className="rounded-2xl border border-[#d4e6dc] bg-[#f0ede8] px-3 py-3 text-sm text-nearblack">
						<p className="font-medium">Thanks, {lead.name.split(" ")[0]}. Our team will be in touch shortly.</p>
						<p className="mt-1 text-[#4a5568]">
							Want to reach us directly in the meantime?{" "}
							<a href={CONTACT_LINK} className="font-medium text-wafs-forest underline">
								Visit our contact page
							</a>
							.
						</p>
					</div>
				)}
			</div>

			<div className="border-t border-[#d4e6dc] p-3">
				<div className="flex items-end gap-2">
					<textarea
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						disabled={isStreaming || !!lead}
						placeholder={lead ? "Conversation complete" : "Type a message..."}
						rows={1}
						className="max-h-24 flex-1 resize-none rounded-xl border border-[#d4e6dc] bg-white px-3 py-2 text-sm text-nearblack outline-none focus:border-wafs-gold disabled:opacity-60"
					/>
					<button
						type="button"
						onClick={handleSend}
						disabled={isStreaming || !input.trim() || !!lead}
						aria-label="Send message"
						className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wafs-forest text-warmwhite transition hover:bg-wafs-forest/90 disabled:opacity-40"
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
