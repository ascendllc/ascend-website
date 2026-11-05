export interface Faq {
	q: string;
	a: string;
}

// Question-and-answer content for each service page (and BrandRise). Written answer-first so
// each answer can be read, and quoted, on its own. Rendered on the page and marked up as FAQPage.
export const serviceFaqs: Record<string, Faq[]> = {
	"growth-marketing-strategy": [
		{
			q: "What is growth marketing strategy?",
			a: "Growth marketing strategy is the plan, frameworks, and measurement that turn marketing from a set of separate campaigns into a system that compounds. It defines who you are trying to reach, how you will reach them, which channels deserve investment, and how you will know what is working.",
		},
		{
			q: "What does Ascend deliver in a growth marketing engagement?",
			a: "Typical deliverables include full-funnel strategy, audience segmentation and ideal customer profile definition, campaign architecture and channel mix, KPI and measurement frameworks, a go-to-market plan, a testing roadmap, a marketing technology stack assessment, and executive reporting.",
		},
		{
			q: "Who is growth marketing strategy for?",
			a: "It is built for nonprofits scaling beyond word-of-mouth, B2B companies entering new markets, growth-stage businesses outgrowing ad hoc marketing, and organizations preparing for a major initiative.",
		},
		{
			q: "How do I get started?",
			a: "Book a free consultation. The first conversation covers your goals, your current marketing, and whether Ascend is the right fit before anything is scoped.",
		},
	],
	"brand-alignment-storytelling": [
		{
			q: "What is brand alignment?",
			a: "Brand alignment is making sure everyone who speaks for an organization tells the same story with the same voice, across every channel and audience. It starts with an audit of how the brand shows up today and ends with messaging, voice, and standards the whole team can use.",
		},
		{
			q: "What does Ascend deliver in a brand alignment engagement?",
			a: "Typical deliverables include a brand audit and diagnosis, core messaging architecture, audience narrative mapping, a brand voice and tone guide, visual identity alignment, cross-channel brand governance, campaign narratives, and executive and sales messaging.",
		},
		{
			q: "When should an organization invest in brand alignment?",
			a: "When it is rebranding or repositioning, when a strong mission is not connecting with audiences, when a B2B company struggles to differentiate, or when a growing organization has a fragmented brand.",
		},
		{
			q: "Has Ascend unified a multi-country brand before?",
			a: "Yes. Brad Stave led the unification of more than thirty separately branded organizations under one global brand for VisionFund International, and led global brand launches at Water Mission.",
		},
	],
	"sales-enablement": [
		{
			q: "What is sales enablement?",
			a: "Sales enablement gives a sales team the messaging, content, tools, training, and process they need to move buyers from first conversation to closed deal, and aligns marketing and sales around one buyer and one story.",
		},
		{
			q: "What does Ascend deliver in a sales enablement engagement?",
			a: "Typical deliverables include a sales messaging framework, buyer journey mapping, sales collateral, CRM strategy and optimization, sales and marketing alignment, onboarding and training materials, proposal and RFP templates, and revenue metrics and reporting.",
		},
		{
			q: "Does Ascend work with HubSpot?",
			a: "Yes. HubSpot CRM strategy and optimization is part of Ascend's sales enablement expertise, alongside complex B2B deal cycles and major donor development for nonprofits.",
		},
		{
			q: "Is sales enablement only for companies?",
			a: "No. Nonprofits with major donor development programs benefit from the same approach: clear messaging, the right materials for each stage, and a process the whole team follows.",
		},
	],
	"lifecycle-marketing-systems": [
		{
			q: "What is lifecycle marketing?",
			a: "Lifecycle marketing plans communication for every stage of the relationship, from first touch through onboarding, retention, reactivation, and advocacy, using automation and data so each person receives the right message at the right time.",
		},
		{
			q: "What does Ascend deliver in a lifecycle marketing engagement?",
			a: "Typical deliverables include lifecycle stage mapping, onboarding journey design, retention and nurture campaigns, reactivation programs, loyalty and advocacy systems, segmentation strategy, email marketing architecture, and a testing and optimization roadmap.",
		},
		{
			q: "Who benefits most from lifecycle marketing?",
			a: "Organizations with strong acquisition but high churn, nonprofits focused on donor retention and lifetime value, B2B companies with long customer relationships, and subscription or membership businesses building loyalty.",
		},
		{
			q: "Can lifecycle marketing help bring back lapsed supporters?",
			a: "Yes. Reactivation programs are a core part of the work, and lifecycle reactivation contributed to record first-quarter donor revenue for Water Mission.",
		},
	],
	"digital-acquisition-growth": [
		{
			q: "What is digital acquisition?",
			a: "Digital acquisition is the work of finding, attracting, and converting new audiences online through paid media, search, content, social, and email, measured from first touch to conversion.",
		},
		{
			q: "What does Ascend deliver in a digital acquisition engagement?",
			a: "Typical deliverables include digital channel strategy, paid media planning and optimization, SEO and content strategy, landing page and conversion optimization, lead generation programs, social media strategy, analytics and attribution, and a growth experimentation framework.",
		},
		{
			q: "Does Ascend handle SEO, GEO, and AEO?",
			a: "Yes. SEO, GEO (generative engine optimization), and AEO (answer engine optimization) are built into Ascend's digital work, so content is found in traditional search and quoted accurately by AI assistants.",
		},
		{
			q: "Does this work for nonprofits as well as businesses?",
			a: "Yes. Ascend has experience in both B2B and nonprofit digital acquisition, including donor acquisition and real-time disaster response campaigns.",
		},
	],
	"creative-design-content-development": [
		{
			q: "What does creative design and content development include?",
			a: "It covers creative strategy and concepting, visual identity and brand design, content strategy and calendars, campaign creative, copywriting and editorial, presentation and sales deck design, digital asset production, and photography and video direction.",
		},
		{
			q: "Is the creative work tied to strategy?",
			a: "Yes. Every creative decision is tied to the strategy: who the work is for, what it should say, and what action it should drive.",
		},
		{
			q: "Who is this service for?",
			a: "Organizations preparing for a major launch or campaign, brands going through a rebrand or refresh, teams without dedicated in-house creative capacity, and organizations that need executive-level content.",
		},
		{
			q: "What formats does Ascend create?",
			a: "Digital, print, video, events, presentations, and more, with a consistent look and voice across all of them.",
		},
	],
	"podcast-production": [
		{
			q: "What is included in Ascend's podcast production service?",
			a: "Show concept and format development, audio engineering and post-production, show branding and creative identity, podcast website development, hosting and distribution setup, guest booking and interview preparation, episode promotion and social content, and publishing cadence and show growth.",
		},
		{
			q: "Who is podcast production for?",
			a: "Founders and executives building a platform, organizations launching a branded show, existing shows that have stalled, and anyone starting from a blank page.",
		},
		{
			q: "Does Ascend produce its own podcast?",
			a: "Yes. Brad Stave personally engineers, hosts, and produces The Wide Lens Podcast, a long-form interview show distributed on Apple Podcasts, Spotify, and YouTube, and brings the same approach to client shows.",
		},
		{
			q: "Can you help a show that has stalled?",
			a: "Yes. Ascend reviews the concept, audio, website, and promotion to find what is holding the show back, then rebuilds the parts that matter.",
		},
	],
};

export const brandRiseFaqs: Faq[] = [
	{
		q: "What is BrandRise?",
		a: "BrandRise is Ascend Consulting's packaged brand-launch system for organizations that need to build or relaunch their brand, website, and marketing presence, with a fixed scope and fixed price.",
	},
	{
		q: "How much does BrandRise cost?",
		a: "There are four upfront tiers: Bronze at $3,500, Silver at $7,500, Gold at $16,500, and Platinum starting at $33,500. BrandRise Monthly is $250 per month with no upfront cost and a two-year minimum.",
	},
	{
		q: "How is BrandRise different from custom consulting?",
		a: "BrandRise has defined deliverables and fixed pricing, so there is no ambiguity about what is included or what it costs. Ascend's standard consulting is custom-scoped to each client's needs.",
	},
	{
		q: "How do I choose a tier?",
		a: "It depends on how much of a brand and marketing system you already have. The free exploratory call walks through your goals and current state and recommends the tier that fits before anything moves forward.",
	},
];
