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

export interface IntakeField {
	label: string;
	value: string;
}

function getResend() {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		throw new Error("RESEND_API_KEY is not set");
	}
	return new Resend(apiKey);
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

export async function sendLeadEmail(lead: CapturedLead, transcript: ChatMessage[]) {
	const resend = getResend();

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

export async function sendIntakeEmail(fields: IntakeField[]) {
	const resend = getResend();

	const nameField = fields.find((f) => f.label === "Full name");
	const orgField = fields.find((f) => f.label === "Organization or business name");
	const emailField = fields.find((f) => f.label === "Email address");

	const rowsHtml = fields
		.filter((f) => f.value.trim().length > 0)
		.map(
			(f) =>
				`<p style="margin:0 0 14px;"><strong>${escapeHtml(f.label)}</strong><br />${escapeHtml(f.value).replace(/\n/g, "<br />")}</p>`
		)
		.join("");

	const subjectWho = [nameField?.value, orgField?.value].filter(Boolean).join(" — ");

	await resend.emails.send({
		from: `BrandRise Intake <intake@${SEND_DOMAIN}>`,
		to: site.email,
		replyTo: emailField?.value || undefined,
		subject: `New BrandRise intake${subjectWho ? `: ${subjectWho}` : ""}`,
		html: `
			<h2>New BrandRise™ pre-call intake</h2>
			${rowsHtml}
		`,
	});
}

export async function sendContactEmail(fields: IntakeField[]) {
	const resend = getResend();

	const nameField = fields.find((f) => f.label === "Name");
	const emailField = fields.find((f) => f.label === "Email");

	const rowsHtml = fields
		.filter((f) => f.value.trim().length > 0)
		.map(
			(f) =>
				`<p style="margin:0 0 14px;"><strong>${escapeHtml(f.label)}</strong><br />${escapeHtml(f.value).replace(/\n/g, "<br />")}</p>`
		)
		.join("");

	await resend.emails.send({
		from: `Contact Form <contact@${SEND_DOMAIN}>`,
		to: site.email,
		replyTo: emailField?.value || undefined,
		subject: `New contact form message${nameField?.value ? `: ${nameField.value}` : ""}`,
		html: `
			<h2>New message from the website contact form</h2>
			${rowsHtml}
		`,
	});
}
