import { site, canonicalUrl } from "../data/site";
import { services } from "../data/services";
import { insights } from "../data/insights";
import { caseStudies } from "../data/caseStudies";
import { portfolio, faqs } from "../data/resources";

// Builds the plain-text/markdown summaries of the site for AI assistants and answer engines
// (llms.txt = index, llms-full.txt = the substance). Generated from the same data files that
// render the site, so they can't drift out of date when a service, case study, article or
// portfolio entry is added.

const summary =
	"Ascend Consulting is a strategic marketing and growth consultancy founded by Brad Stave and based in Tacoma, Washington. It helps nonprofits, technology companies, and growth-stage businesses build stronger brands, communicate with clarity, and grow with measurable, AI-optimized marketing systems.";

const url = (path: string) => canonicalUrl(path);
const abs = (u: string) => new URL(u, site.url).href;

const corePages = [
	{ name: "Home", path: "/", note: "Overview of Ascend Consulting's services, philosophy, and results." },
	{ name: "About Brad Stave", path: "/about", note: "Founder and Principal Consultant: background, experience, and credentials." },
	{ name: "Contact", path: "/contact", note: `Phone ${site.phoneDisplay}, email ${site.email}, or book a free consultation.` },
	{ name: "Resources", path: "/resources", note: "Partners, case studies, portfolio, testimonials, and frequently asked questions." },
	{ name: "Insights", path: "/insights", note: "Guides on brand strategy, growth marketing, SEO, GEO, and AEO." },
];

const solutions = [
	{ name: "BrandRise™", path: "/brandrise", note: "Complete brand launch or relaunch packages: four upfront tiers starting at $3,500, or $250/month with no upfront cost." },
	{ name: "Industry Solutions", path: "/industry", note: "Marketing systems for legal and accounting/finance firms." },
	{ name: "Exit-Ready Brand", path: "/exit-ready-brand", note: "Brand and marketing readiness for organizations preparing to sell." },
	{ name: "Real Estate Marketing", path: "/real-estate-marketing", note: "Listing marketing systems and digital property books for real estate agents." },
	{ name: "Partners", path: "/partners", note: "The partner network Ascend works with." },
];

const link = (name: string, href: string, note?: string) => `- [${name}](${href})${note ? `: ${note}` : ""}`;

export function buildLlmsTxt() {
	const lines = [
		`# ${site.name}`,
		"",
		`> ${summary}`,
		"",
		`Ascend delivers ${services.length} core service lines plus BrandRise™, a packaged brand-launch system. The full text of the site's key content is available at ${url("/llms-full.txt")}.`,
		"",
		"## Core Pages",
		"",
		...corePages.map((p) => link(p.name, url(p.path), p.note)),
		"",
		"## Services",
		"",
		...services.map((s) => link(s.name, url(`/services/${s.slug}`), s.shortHook)),
		"",
		"## Solutions",
		"",
		...solutions.map((p) => link(p.name, url(p.path), p.note)),
		"",
		"## Case Studies",
		"",
		...caseStudies.map((c) => link(`${c.client}: ${c.title}`, url(`/case-study/${c.slug}`))),
		"",
		"## Insights",
		"",
		...insights.map((i) => link(i.title, url(`/insights/${i.slug}`), i.metaDescription)),
		"",
		"## Optional",
		"",
		link("Full site content for LLMs", url("/llms-full.txt")),
		link("Insights RSS feed", abs("/rss.xml")),
		link("Terms and Conditions", url("/terms-and-conditions")),
		link("Privacy Policy", url("/privacy-policy")),
		"",
	];
	return lines.join("\n");
}

export function buildLlmsFullTxt() {
	const out: string[] = [
		`# ${site.name}`,
		"",
		`> ${summary}`,
		"",
		"## Contact",
		"",
		`- Website: ${url("/")}`,
		`- Email: ${site.email}`,
		`- Phone: ${site.phoneDisplay}`,
		`- Location: ${site.location}`,
		`- Book a free consultation: ${site.booking}`,
		"",
		"## About the founder",
		"",
		"Brad Stave is the Founder and Principal Consultant of Ascend Consulting, a senior marketing executive with 20+ years of global leadership experience across nonprofit, technology, and corporate sectors, including senior roles at Water Mission, VisionFund International, and Zones, LLC. He is a partner at NineStone Partners and host of The Wide Lens Podcast.",
		"",
		"## Services",
		"",
	];
	for (const s of services) {
		out.push(`### ${s.name}`, "", `URL: ${url(`/services/${s.slug}`)}`, "", s.subhead, "");
		out.push(...s.conceptBody.map((p) => `${p}\n`));
		if (s.work.length) out.push("What Ascend delivers:", "", ...s.work.map((w) => `- ${w.title}: ${w.description}`), "");
	}
	out.push("## Frequently asked questions", "");
	for (const f of faqs) out.push(`### ${f.q}`, "", f.a, "");
	out.push("## Case studies", "");
	for (const c of caseStudies) {
		out.push(`### ${c.client}: ${c.title}`, "", `URL: ${url(`/case-study/${c.slug}`)}`, "", c.tagline, "");
		if (c.results) out.push(`Results: ${c.results}`, "");
	}
	out.push("## Portfolio", "", "Organizations and projects Ascend has built or led:", "");
	for (const p of portfolio) out.push(`- [${p.name}](${abs(p.url)}): ${p.whatTheyDo}`);
	out.push("", "## Insights", "");
	for (const i of insights) {
		out.push(`### ${i.title}`, "", `URL: ${url(`/insights/${i.slug}`)} | Published ${i.dateDisplay} | By Brad Stave`, "");
		for (const sec of i.sections) {
			if (sec.heading) out.push(`#### ${sec.heading}`, "");
			out.push(...sec.paragraphs.map((p) => `${p}\n`));
			if (sec.list) out.push(...sec.list.map((li) => `- ${li}`), "");
		}
	}
	return out.join("\n");
}
