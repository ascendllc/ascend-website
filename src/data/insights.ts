export interface InsightSection {
	heading?: string;
	paragraphs: string[];
	list?: string[];
}

export interface Insight {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	excerpt: string;
	publishedDate: string;
	dateDisplay: string;
	readingTime: string;
	relatedLink: { href: string; label: string };
	sections: InsightSection[];
}

export const insights: Insight[] = [
	{
		slug: "what-is-brandrise",
		title: "What Is BrandRise™? A Complete Guide to Ascend's Brand Launch System",
		metaTitle: "What Is BrandRise™? | Ascend Consulting",
		metaDescription: "BrandRise is Ascend Consulting's packaged brand-launch system. Here's what it includes, what each tier costs, and how to choose the right one.",
		excerpt:
			"BrandRise is Ascend Consulting's complete, productized system for building or relaunching an organization's brand, website, and marketing presence. Here's exactly what it includes, what each tier costs, and how to know which one fits.",
		publishedDate: "2026-08-12",
		dateDisplay: "August 12, 2026",
		readingTime: "6 min read",
		relatedLink: { href: "/brandrise", label: "Explore BrandRise™ Packages" },
		sections: [
			{
				paragraphs: [
					"Most organizations that need a new brand or website face the same problem: it's unclear what's actually included, what it should cost, or how long it will take. BrandRise™ exists to remove that ambiguity. It's Ascend Consulting's packaged, productized brand-launch system — a defined scope, fixed pricing, and a clear set of deliverables, instead of an open-ended custom engagement.",
				],
			},
			{
				heading: "What BrandRise actually covers",
				paragraphs: [
					"BrandRise covers the full path from brand foundation to a live, working marketing presence: strategy and positioning, visual identity (logo, color, typography), verbal identity (messaging and tone of voice), a professional website, and — depending on tier — go-to-market planning, content, SEO/GEO/AEO optimization, and promotional execution.",
					"It's designed for two kinds of organizations: those building a brand for the first time, and those relaunching one that no longer reflects who they've become.",
				],
			},
			{
				heading: "The five ways to launch",
				paragraphs: [
					"BrandRise comes in five configurations, each built for a different starting point and budget:",
				],
				list: [
					"BrandRise Monthly — $250/month, zero upfront cost (2-year minimum). A custom one-page website, branded email, hosting, Google Workspace, basic SEO, and two seasonal refreshes a year. Best for organizations that want to launch immediately without a large initial investment.",
					"Bronze ($3,500 one-time) — Brand strategy, logo and visual identity, a brand standards guide, and a professional website. The essentials, done right.",
					"Silver ($7,500 one-time) — Everything in Bronze, plus messaging architecture, go-to-market planning, social media setup, and email marketing.",
					"Gold ($16,500 one-time, most popular) — Everything in Silver, plus a full digital campaign, lead generation strategy, a content program, and SEO/GEO/AEO optimization.",
					"Platinum (starting at $33,500 one-time) — Everything in Gold, plus a full promotional campaign, paid media strategy, PR groundwork, advanced analytics, and 60 days of post-launch support.",
				],
			},
			{
				heading: "Choosing the right tier",
				paragraphs: [
					"The honest answer is that it depends on how much of the system you already have. If you have no brand assets at all and want to move fast without a large upfront cost, BrandRise Monthly removes that barrier entirely. If you're starting from zero and want full ownership of a complete brand system in one engagement, Bronze through Platinum scale with how comprehensive you need that system to be — from the essentials (Bronze) to a full go-to-market and promotional launch (Platinum).",
					"Every tier can add the optional Ongoing Care Plan ($100/month, 2-year minimum) to keep the site and brand maintained after launch.",
				],
			},
			{
				heading: "How BrandRise differs from custom consulting",
				paragraphs: [
					"Ascend's standard consulting services (Growth Marketing Strategy, Sales Enablement, and the rest) are custom-scoped to a specific organization's needs. BrandRise is the opposite by design: fixed scope, fixed price, no ambiguity about what's included. It's the right fit for organizations that know they need a complete brand and marketing build or relaunch and want to move forward with a known budget from day one.",
				],
			},
			{
				paragraphs: [
					"Every BrandRise tier starts with a free, no-commitment exploratory call to talk through goals, current brand state, and which tier fits before anything moves forward.",
				],
			},
		],
	},
	{
		slug: "seo-vs-geo-vs-aeo",
		title: "SEO vs. GEO vs. AEO: What They Mean and Why They Matter Now",
		metaTitle: "SEO vs. GEO vs. AEO Explained | Ascend Consulting",
		metaDescription: "A plain-language guide to SEO, GEO, and AEO — what each one optimizes for, how they differ, and why modern marketing needs all three.",
		excerpt:
			"Search is no longer just Google's ten blue links. Here's what SEO, GEO, and AEO each actually optimize for, how they differ, and why a modern marketing strategy needs all three working together.",
		publishedDate: "2026-08-12",
		dateDisplay: "August 12, 2026",
		readingTime: "5 min read",
		relatedLink: { href: "/services/growth-marketing-strategy", label: "See Growth Marketing Strategy" },
		sections: [
			{
				paragraphs: [
					"A decade ago, being found online meant one thing: ranking on Google. Today, the ways people actually find answers have split into three distinct channels — traditional search, AI-generated answers, and voice/featured-snippet results. Each one is optimized differently, and getting found in one doesn't guarantee you'll show up in the others.",
				],
			},
			{
				heading: "SEO — Search Engine Optimization",
				paragraphs: [
					"SEO is the discipline of ranking in traditional search engine results — Google, Bing, and similar. It's built on technical fundamentals (site speed, crawlability, mobile-friendliness), on-page signals (titles, headings, content quality), and off-page trust signals (backlinks, domain authority). SEO is still the foundation everything else builds on — if a page isn't crawlable and well-structured, neither AI systems nor answer engines can find it either.",
				],
			},
			{
				heading: "GEO — Generative Engine Optimization",
				paragraphs: [
					"GEO is newer: it's the practice of structuring content so AI answer engines — ChatGPT, Perplexity, Google AI Overviews, Claude, Copilot — choose to cite or paraphrase it when they synthesize a response to a user's question. GEO leans heavily on clear entity information (structured data about who you are and what you do), specific and citable facts (named clients, real numbers, concrete outcomes), and content that directly answers a question rather than requiring a click-through to figure out.",
				],
			},
			{
				heading: "AEO — Answer Engine Optimization",
				paragraphs: [
					"AEO focuses on getting pulled into featured snippets, voice assistant answers, and \"position zero\" results — the direct answer that appears above the regular search results, or that a voice assistant reads aloud. It rewards content structured as clear questions followed by concise, self-contained answers, genuine list and table markup, and FAQ-style content that mirrors how people actually phrase questions.",
				],
			},
			{
				heading: "Why you need all three",
				paragraphs: [
					"These three disciplines overlap but aren't interchangeable. A page can rank well in traditional search (strong SEO) while still never getting cited by an AI answer engine, if it lacks the structured entity data and directly-quotable facts GEO rewards. Conversely, content written purely for AI citation can read poorly for a human scanning a search results page.",
					"The practical answer is to build for all three from the start: solid technical SEO as the foundation, structured data (schema.org markup) and specific, verifiable facts for GEO, and clear question-and-answer content structure for AEO. That's the approach Ascend Consulting builds into every engagement — including this website itself.",
				],
			},
		],
	},
	{
		slug: "what-is-a-growth-marketing-system",
		title: "What Is a Growth Marketing System? (And Why Campaigns Alone Don't Work)",
		metaTitle: "What Is a Growth Marketing System? | Ascend Consulting",
		metaDescription: "Why disconnected campaigns stall out, and what it actually means to build marketing as a compounding system instead.",
		excerpt:
			"Most organizations run marketing as a series of disconnected campaigns — a push here, a launch there. A growth marketing system is a different approach entirely: one built to compound, not just execute.",
		publishedDate: "2026-08-12",
		dateDisplay: "August 12, 2026",
		readingTime: "4 min read",
		relatedLink: { href: "/services/growth-marketing-strategy", label: "Explore Growth Marketing Strategy" },
		sections: [
			{
				paragraphs: [
					"\"We need more marketing\" is rarely the real problem. Most organizations that feel stuck on growth aren't short on effort — they're short on system. They run campaign after campaign, but each one starts from scratch: new audience research, new creative, new measurement, no compounding insight from the last one.",
				],
			},
			{
				heading: "A campaign vs. a system",
				paragraphs: [
					"A campaign is a single, time-bound push toward a goal. A growth marketing system is the infrastructure underneath every campaign — the audience segmentation, channel architecture, measurement framework, and testing roadmap that make each individual campaign smarter than the last.",
					"The difference shows up over time. Without a system, ten campaigns produce ten independent results, and whatever was learned in campaign three is lost by campaign eight. With a system, ten campaigns produce nine rounds of compounding insight — each one refining audience targeting, channel mix, and messaging based on what actually worked.",
				],
			},
			{
				heading: "What a real system includes",
				paragraphs: ["A growth marketing system generally includes:"],
				list: [
					"A full-funnel strategy that maps every stage from awareness to retention, with a defined role for each channel",
					"Documented audience segments and ideal customer profiles that sharpen targeting instead of broadcasting to everyone",
					"A measurement framework that ties marketing activity to actual business outcomes — not vanity metrics",
					"A structured testing roadmap that turns every campaign into a learning opportunity for the next one",
					"A marketing technology stack that supports the system instead of fighting it",
				],
			},
			{
				heading: "Why this matters more than any single campaign",
				paragraphs: [
					"Organizations that build the system first — even a lightweight version of it — get more out of every dollar they spend on individual campaigns afterward. It's the difference between marketing as a cost center that has to be re-justified every quarter, and marketing as a measurable, compounding driver of growth.",
				],
			},
		],
	},
];

export function getInsight(slug: string) {
	return insights.find((i) => i.slug === slug);
}
