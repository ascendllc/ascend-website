import { Resend } from "resend";
import { site } from "../data/site";

// A dedicated sending subdomain, not the root domain. ascendsmartly.com's MX
// and SPF records already point at Google Workspace for brad@ascendsmartly.com;
// verifying Resend on a subdomain keeps the two mail setups from colliding.
const SEND_DOMAIN = `mail.${site.domain}`;

export interface ChatMessage {
	role: "user" | "assistant";
	content: string;
}

export interface CapturedLead {
	name: string;
	email: string;
	org: string;
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

export async function sendLeadEmail(lead: CapturedLead, transcript: ChatMessage[]) {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		throw new Error("RESEND_API_KEY is not set");
	}
	const resend = new Resend(apiKey);

	const transcriptHtml = transcript
		.map(
			(m) =>
				`<p style="margin:0 0 10px;"><strong>${m.role === "user" ? "Visitor" : "Ava"}:</strong> ${escapeHtml(m.content)}</p>`
		)
		.join("");

	await resend.emails.send({
		from: `Ava <ava@${SEND_DOMAIN}>`,
		to: site.email,
		replyTo: lead.email,
		subject: `New lead from Ava: ${lead.name} (${lead.org})`,
		html: `
			<h2>New lead captured by Ava</h2>
			<p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
			<p><strong>Organization:</strong> ${escapeHtml(lead.org)}</p>
			<hr />
			<h3>Conversation</h3>
			${transcriptHtml}
		`,
	});
}
