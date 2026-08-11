export interface ValuePair {
	from: string;
	to: string;
}

export interface Service {
	slug: string;
	number: number;
	name: string;
	/** h1 renders as: nameLead (plain white) + <br/> + nameAccent (gradient) */
	nameLead: string;
	nameAccent: string;
	shortHook: string;
	subhead: string;
	cta: string;
	conceptHeadline: string;
	conceptParagraphs: string[];
	stats: { value: string; label: string }[];
	work: { title: string; description: string }[];
	valueHeadline: string;
	valueSubhead: string;
	value: ValuePair[];
	whoHeadline: string;
	whoSubhead: string;
	who: { title: string; desc: string }[];
	finalHeadline: string;
	finalSubhead: string;
}

export const services: Service[] = [
	{
		slug: "growth-marketing-strategy",
		number: 1,
		name: "Growth Marketing Strategy",
		nameLead: "Growth Marketing",
		nameAccent: "Strategy",
		shortHook:
			"Do you have a clear, repeatable system for bringing in qualified customers — or is growth still largely unpredictable?",
		subhead:
			"Build marketing into a disciplined, scalable growth engine — not just campaigns, but the systems, frameworks, and data infrastructure that make every investment compound over time.",
		cta: "Let's Talk Growth",
		conceptHeadline: "Marketing isn't a campaign. It's an engine.",
		conceptParagraphs: [
			"Develop scalable, data-driven campaigns that drive measurable ROI, accelerate acquisition, and strengthen long-term engagement.",
			"A growth engine is built once and compounds every quarter after — not rebuilt from scratch with every new initiative.",
			"That means the frameworks, measurement, and channel mix all have to work together, not as isolated tactics.",
		],
		stats: [
			{ value: "20+ years", label: "of growth marketing leadership" },
			{ value: "3 sectors", label: "nonprofit, tech, corporate" },
			{ value: "30+", label: "country markets managed" },
			{ value: "Record Q1", label: "donor revenue for Water Mission" },
		],
		work: [
			{ title: "Full-Funnel Strategy Development", description: "Architecture that connects awareness through conversion into one coherent plan." },
			{ title: "Audience Segmentation & ICP Definition", description: "Define exactly who you're targeting and why." },
			{ title: "Campaign Architecture & Channel Mix", description: "The right combination of channels working together, not in isolation." },
			{ title: "KPI Frameworks & Measurement Design", description: "Metrics that tie directly to revenue, donor growth, or pipeline." },
			{ title: "Go-to-Market Planning", description: "Structured launch plans for new products, markets, or initiatives." },
			{ title: "Testing Roadmaps", description: "Systematic experimentation that compounds learning over time." },
			{ title: "Marketing Technology Stack Assessment", description: "Evaluate whether your tools support or hinder the strategy." },
			{ title: "Executive Reporting & Strategic Insights", description: "Board- and leadership-level visibility into what's working." },
		],
		valueHeadline: "What changes when strategy is right",
		valueSubhead: "The organizations I work with don't just run better campaigns. They build a different relationship with growth.",
		value: [
			{ from: "Fragmented tactics", to: "Integrated, full-funnel strategy with clear ownership at every stage" },
			{ from: "Guesswork and gut feel", to: "Measurable attribution tied to revenue, donor growth, or pipeline" },
			{ from: "One-off campaigns", to: "Repeatable growth systems that compound results over time" },
			{ from: "Marketing as a cost center", to: "Marketing as a measurable, scalable driver of organizational growth" },
			{ from: "Disconnected channels", to: "A coherent channel mix where paid, organic, and CRM work in concert" },
			{ from: "Reporting that doesn't answer questions", to: "Dashboards and insights that move strategy forward" },
		],
		whoHeadline: "Organizations ready to grow with intention",
		whoSubhead: "I work with leaders who know something needs to change — and are ready to build the strategy that makes it happen.",
		who: [
			{ title: "Nonprofits scaling beyond word-of-mouth", desc: "Organizations that have grown through relationships but need a disciplined acquisition engine to reach the next level of donor, member, or constituent growth." },
			{ title: "B2B companies entering new markets", desc: "Technology, services, and professional firms launching into new segments, geographies, or buyer personas who need a go-to-market strategy grounded in data — not assumptions." },
			{ title: "Growth-stage businesses outgrowing ad hoc marketing", desc: "Companies that have proven product-market fit and are now ready to build the systems, team alignment, and measurement infrastructure that support scale." },
			{ title: "Organizations preparing for a major initiative", desc: "Teams gearing up for a capital campaign, product launch, rebrand, or fundraising push who need strategy, sequencing, and execution aligned before the clock starts." },
		],
		finalHeadline: "Ready to build a growth engine for your organization?",
		finalSubhead: "Whether you're starting from scratch, rebuilding after a plateau, or preparing for a major initiative — I'd love to hear where you're trying to go. Let's talk through your goals and see if there's a path forward together.",
	},
	{
		slug: "brand-alignment-storytelling",
		number: 2,
		name: "Brand Alignment & Storytelling",
		nameLead: "Brand Alignment &",
		nameAccent: "Storytelling",
		shortHook: "Does everyone in your organization tell the same story about who you are and who you serve?",
		subhead:
			"Unify your message, clarify your identity, and craft the story that builds lasting trust and moves people — across every channel, audience, and medium.",
		cta: "Let's Shape Your Story",
		conceptHeadline: "Your story is either working for you or against you.",
		conceptParagraphs: [
			"Unify your message across platforms and audiences to build trust, clarity, and a compelling narrative that moves people to action.",
			"When every team tells a slightly different version of your story, none of them land with full force.",
			"Alignment isn't about sameness — it's about one clear narrative expressed consistently everywhere your audience encounters you.",
		],
		stats: [
			{ value: "20+ years", label: "leading brand strategy across sectors" },
			{ value: "30+", label: "country markets unified under one brand" },
			{ value: "Global launches", label: "at VisionFund & Water Mission" },
			{ value: "Every channel", label: "digital, print, events, and sales" },
		],
		work: [
			{ title: "Brand Audit & Diagnosis", description: "A clear-eyed assessment of where your brand is inconsistent or unclear." },
			{ title: "Core Messaging Architecture", description: "The foundational story every other message builds on." },
			{ title: "Audience Narrative Mapping", description: "How the story shifts appropriately by audience without losing its core." },
			{ title: "Brand Voice & Tone Guide", description: "A practical reference so every writer sounds like the same brand." },
			{ title: "Visual Identity Alignment", description: "Making sure the visual system reinforces the verbal one." },
			{ title: "Cross-Channel Brand Governance", description: "Systems that keep the brand consistent as more people touch it." },
			{ title: "Campaign Narrative Development", description: "Story arcs that carry through specific campaigns and launches." },
			{ title: "Executive & Sales Messaging", description: "Talking points and narratives for leadership and revenue teams." },
		],
		valueHeadline: "What changes when your brand is aligned",
		valueSubhead: "Clarity compounds. When everyone tells the same story, the whole organization moves faster.",
		value: [
			{ from: "Scattered messages across teams", to: "One clear, unified voice across every channel and touchpoint" },
			{ from: "Generic, forgettable positioning", to: "A differentiated story that only your organization can tell" },
			{ from: "Inconsistent visual identity", to: "A cohesive brand system that builds recognition with every impression" },
			{ from: "Marketing and sales disconnected", to: "Aligned narratives from first impression through close" },
			{ from: "Mission that doesn't convert", to: "Story that moves donors, buyers, and partners to act" },
			{ from: "Brand fragmented across regions or teams", to: "Governance system that scales consistency without bureaucracy" },
		],
		whoHeadline: "Organizations ready to own their story",
		whoSubhead: "I work with leaders who know their current brand isn't doing them justice — and are ready to fix it.",
		who: [
			{ title: "Organizations going through a rebrand or repositioning", desc: "Teams that know their current brand no longer reflects who they are — and need a disciplined process to define what comes next and roll it out with confidence." },
			{ title: "Nonprofits with a powerful mission that isn't connecting", desc: "Organizations doing meaningful work but struggling to translate it into donor communications, campaigns, and stories that create urgency and inspire giving." },
			{ title: "B2B companies struggling to differentiate", desc: "Businesses in crowded markets where every competitor sounds the same — and where a sharper story and clearer positioning would directly impact sales pipeline." },
			{ title: "Growing organizations with fragmented brand", desc: "Companies or institutions that have scaled rapidly and now have inconsistent messaging, multiple visual styles, and no single source of brand truth." },
		],
		finalHeadline: "Ready to build a brand your audience actually believes?",
		finalSubhead: "Whether you're repositioning from scratch or just need to align what you already have, I'd love to explore what's possible. Let's start with a conversation about where you are and where you want to go.",
	},
	{
		slug: "sales-enablement",
		number: 3,
		name: "Sales Enablement",
		nameLead: "Sales",
		nameAccent: "Enablement",
		shortHook: "Does your sales team have the right messaging, tools, and confidence to close — consistently?",
		subhead:
			"Close the gap between marketing investment and revenue outcomes — equipping your team with the messaging, tools, and systems that turn conversations into closed deals.",
		cta: "Let's Equip Your Team",
		conceptHeadline: "Marketing generates interest. Enablement turns it into revenue.",
		conceptParagraphs: [
			"Equip teams with the tools, messaging, and systems that accelerate performance and deepen customer relationships.",
			"Interest that doesn't convert is wasted marketing spend — enablement is where that spend finally pays off.",
			"The best enablement work connects brand messaging directly to what a rep says in the room, on the call, or in the proposal.",
		],
		stats: [
			{ value: "HubSpot", label: "CRM strategy and optimization expertise" },
			{ value: "B2B", label: "complex deal cycle experience" },
			{ value: "Major donor", label: "development for nonprofits" },
			{ value: "Full alignment", label: "revenue team alignment (marketing → sales)" },
		],
		work: [
			{ title: "Sales Messaging Framework", description: "A structured way for reps to talk about value, not just features." },
			{ title: "Buyer Journey Mapping", description: "Understand what a prospect needs to know at each stage of the decision." },
			{ title: "Sales Collateral Development", description: "One-pagers, decks, and materials that actually get used." },
			{ title: "CRM Strategy & Optimization", description: "A pipeline structure your team trusts and leadership can forecast from." },
			{ title: "Sales & Marketing Alignment", description: "Shared definitions, handoffs, and goals across both teams." },
			{ title: "Onboarding & Training Materials", description: "Get new reps productive faster with a real system." },
			{ title: "Proposal & RFP Templates", description: "Consistent, persuasive materials for competitive deals." },
			{ title: "Revenue Metrics & Reporting", description: "Activity and outcome metrics that inform real coaching." },
		],
		valueHeadline: "What changes when your team is enabled",
		valueSubhead: "Equipped teams don't just close more. They close faster, more consistently, and with higher confidence.",
		value: [
			{ from: "Marketing and sales working in silos", to: "Aligned teams with shared goals, shared language, and clear handoffs" },
			{ from: "Long, inefficient deal cycles", to: "Faster conversions with the right tools and messaging at every stage" },
			{ from: "Inconsistent rep messaging", to: "Every team member telling the same confident, differentiated story" },
			{ from: "CRM no one actually uses", to: "A pipeline your team trusts and leadership can actually forecast from" },
			{ from: "New hires taking months to ramp", to: "Scalable onboarding that gets reps productive faster" },
			{ from: "Gut-feel sales coaching", to: "Data-driven performance reviews tied to clear activity metrics" },
		],
		whoHeadline: "Organizations ready to turn pipeline into performance",
		whoSubhead: "I work with revenue leaders who know their team has more potential than their current tools and process allow.",
		who: [
			{ title: "Sales teams that have outgrown ad hoc processes", desc: "Organizations where success has come from individual talent and relationships — but growth now requires a repeatable system that doesn't depend on any single person." },
			{ title: "Companies launching new products or entering new markets", desc: "Teams facing a new buyer, a new message, or a new competitive landscape who need the tools, training, and content to sell with confidence from day one." },
			{ title: "Nonprofits with major donor development programs", desc: "Development teams building principal or major gift programs who need the messaging architecture, materials, and CRM strategy to cultivate and close transformational gifts." },
			{ title: "B2B organizations scaling their sales organization", desc: "Companies adding headcount who need the infrastructure — onboarding, messaging, CRM, and reporting — to maintain quality and consistency as the team grows." },
		],
		finalHeadline: "Ready to equip your team to win more?",
		finalSubhead: "Whether you're building your first sales process or rebuilding one that's broken, I'd love to hear where the gaps are. Let's have a direct conversation about what your team needs to perform.",
	},
	{
		slug: "lifecycle-marketing-systems",
		number: 4,
		name: "Lifecycle Marketing Systems",
		nameLead: "Lifecycle Marketing",
		nameAccent: "Systems",
		shortHook: "Are you nurturing your audience after the first touch — or losing them before they're ready to buy?",
		subhead:
			"Build the automated, insight-driven journeys that turn first touches into lasting relationships — and lasting relationships into sustainable growth.",
		cta: "Let's Build Your Lifecycle",
		conceptHeadline: "Acquisition is a beginning. The relationship is the business.",
		conceptParagraphs: [
			"Architect automated, insight-driven journeys that nurture audiences from first touch to long-term loyalty.",
			"Most organizations over-invest in acquisition and under-invest in what happens after someone raises their hand.",
			"A well-built lifecycle system works continuously — welcoming, nurturing, retaining, and reactivating without manual effort.",
		],
		stats: [
			{ value: "Record Q1", label: "donor revenue through lifecycle reactivation" },
			{ value: "30+", label: "country programs unified in lifecycle strategy" },
			{ value: "Full architecture", label: "email from welcome to win-back" },
			{ value: "Always-on", label: "journeys that work around the clock" },
		],
		work: [
			{ title: "Lifecycle Stage Mapping", description: "Define every stage a customer or donor moves through." },
			{ title: "Onboarding Journey Design", description: "First-touch experiences that set the relationship up right." },
			{ title: "Retention & Nurture Campaigns", description: "Keep the relationship warm between major touchpoints." },
			{ title: "Reactivation Programs", description: "Win back lapsed customers and donors systematically." },
			{ title: "Loyalty & Advocacy Systems", description: "Turn your best relationships into referrals and repeat revenue." },
			{ title: "Segmentation Strategy", description: "Group audiences by behavior and stage, not just demographics." },
			{ title: "Email Marketing Architecture", description: "The technical and creative backbone of the whole lifecycle." },
			{ title: "Testing & Optimization Roadmap", description: "Continuous improvement built into the system, not bolted on." },
		],
		valueHeadline: "What changes when the full lifecycle is managed",
		valueSubhead: "Organizations that invest in lifecycle don't just retain more — they build the kind of relationships that fuel referrals and organic growth.",
		value: [
			{ from: "Acquisition-only thinking", to: "Full lifecycle strategy with equal investment in retention and growth" },
			{ from: "One-size-fits-all communications", to: "Personalized journeys based on behavior, stage, and declared interests" },
			{ from: "Lapsed audiences written off", to: "Systematic reactivation that recovers meaningful revenue and relationships" },
			{ from: "Email program that feels like spam", to: "High-deliverability, behavior-triggered communications audiences actually want" },
			{ from: "Unknown churn drivers", to: "Clear stage data that surfaces where relationships are breaking down" },
			{ from: "Manual, one-off campaigns", to: "Automated, always-on journeys that work while your team sleeps" },
		],
		whoHeadline: "Organizations ready to invest in relationships, not just acquisition",
		whoSubhead: "I work with leaders who understand that retention is the highest-leverage investment they can make — and are ready to build the systems to pursue it.",
		who: [
			{ title: "Organizations with strong acquisition but high churn", desc: "Teams that have cracked top-of-funnel but are watching hard-won customers or donors disappear — and need the lifecycle systems to change the math on retention." },
			{ title: "Nonprofits focused on donor retention and lifetime value", desc: "Development teams who know that retaining a current donor is dramatically more cost-effective than acquiring a new one — and are ready to build the systems that make it happen." },
			{ title: "B2B companies with long customer relationships to nurture", desc: "Organizations in industries where the relationship extends years beyond the initial sale — and where systematic lifecycle marketing is the difference between expansion and churn." },
			{ title: "Subscription or membership businesses building loyalty", desc: "Brands where recurring revenue depends on engagement — and where thoughtful lifecycle design is the most direct lever for improving retention rates and reducing involuntary churn." },
		],
		finalHeadline: "Ready to build a lifecycle that keeps people coming back?",
		finalSubhead: "Whether you're starting from zero or trying to fix a system that's underperforming, I'd love to hear where the gaps are. Let's talk about what it would take to change your retention curve.",
	},
	{
		slug: "digital-acquisition-growth",
		number: 5,
		name: "Digital Acquisition & Growth",
		nameLead: "Digital Acquisition",
		nameAccent: "& Growth",
		shortHook: "Do you know exactly who your ideal customer is, where to find them, and what it takes to convert them?",
		subhead:
			"Find, attract, and convert new audiences at scale — with the right channel mix, creative strategy, and measurement infrastructure that makes every dollar compound.",
		cta: "Let's Grow Your Reach",
		conceptHeadline: "Digital growth isn't about spending more. It's about spending smarter.",
		conceptParagraphs: [
			"Use precision targeting, creative optimization, and integrated storytelling to expand reach and convert new audiences at scale.",
			"The organizations that win digitally aren't the ones with the biggest budgets — they're the ones with the clearest attribution.",
			"Every channel should amplify the others, not compete with them for the same conversion.",
		],
		stats: [
			{ value: "Multi-channel", label: "paid, organic, social, content, email" },
			{ value: "B2B & nonprofit", label: "digital acquisition expertise" },
			{ value: "SEO/GEO/AEO/IEO", label: "optimization strategy" },
			{ value: "Full attribution", label: "from first touch to conversion" },
		],
		work: [
			{ title: "Digital Channel Strategy", description: "Which channels earn investment and why." },
			{ title: "Paid Media Planning & Optimization", description: "Efficient spend across search, social, and display." },
			{ title: "SEO & Content Strategy", description: "Organic visibility tied to real search intent." },
			{ title: "Landing Page & Conversion Optimization", description: "Turn traffic into qualified pipeline." },
			{ title: "Lead Generation Programs", description: "Systematic, repeatable programs, not one-off pushes." },
			{ title: "Social Media Strategy", description: "Platform-specific approaches that build real audiences." },
			{ title: "Analytics & Attribution", description: "Know exactly where revenue is coming from." },
			{ title: "Growth Experimentation Framework", description: "A disciplined way to test and scale what works." },
		],
		valueHeadline: "What changes when acquisition is a system",
		valueSubhead: "The best digital acquisition programs don't feel like marketing. They feel like a reliable pipeline that just keeps producing.",
		value: [
			{ from: "Spray and pray spending", to: "Precision targeting with clear ROI and cost-per-acquisition benchmarks" },
			{ from: "Organic traffic guesswork", to: "SEO strategy tied directly to business goals and search intent" },
			{ from: "Traffic that doesn't convert", to: "Optimized conversion paths that turn visits into pipeline" },
			{ from: "Channel-by-channel thinking", to: "Integrated acquisition system where channels amplify each other" },
			{ from: 'Reporting that doesn\'t answer "why"', to: "Attribution model that shows where revenue is actually coming from" },
			{ from: "One-time campaigns", to: "Scalable growth programs that compound returns over time" },
		],
		whoHeadline: "Organizations ready to build a real digital growth engine",
		whoSubhead: "I work with leaders who are tired of guessing which channels work — and are ready to build the infrastructure to know for certain.",
		who: [
			{ title: "Organizations entering digital acquisition for the first time", desc: "Nonprofits, institutions, and businesses that have relied on referrals and relationships — and are ready to build the digital infrastructure that creates a scalable, repeatable flow of new contacts." },
			{ title: "Brands looking to scale proven digital programs", desc: "Organizations that have seen early success in paid or organic channels and now need the strategy, creative testing systems, and measurement infrastructure to scale spending confidently." },
			{ title: "Nonprofits building digital donor acquisition", desc: "Development teams moving beyond direct mail and event-based giving who need the digital strategy, content approach, and paid media expertise to grow their online donor base cost-effectively." },
			{ title: "B2B companies with underperforming digital presence", desc: "Organizations investing in SEO, content, or paid media without a clear strategy — and finding that traffic doesn't translate to pipeline in the way leadership expects." },
		],
		finalHeadline: "Ready to turn your digital channels into a growth engine?",
		finalSubhead: "Whether you're building digital acquisition from scratch or trying to scale what's already working, let's start with a direct conversation about your goals, your current state, and where the opportunity is.",
	},
	{
		slug: "creative-design-content-development",
		number: 6,
		name: "Creative Design & Content Development",
		nameLead: "Creative Design &",
		nameAccent: "Content Development",
		shortHook: "Does your content and creative work reflect the actual quality of what you deliver?",
		subhead:
			"Bring your brand to life with creative that doesn't just look good — it communicates the right message to the right person in a way that moves them.",
		cta: "Let's Create Together",
		conceptHeadline: "Creative isn't decoration. It's strategy made visible.",
		conceptParagraphs: [
			"Craft compelling visuals, messaging, and content systems that bring your brand to life — from concept through execution — across every channel and audience.",
			"Good creative earns its place by serving the strategy, not by looking good in isolation.",
			"Every asset — from a deck to a photo shoot — should be built for the specific channel, audience, and goal it serves.",
		],
		stats: [
			{ value: "20+ years", label: "brand and campaign creative leadership" },
			{ value: "30+", label: "country markets, global campaigns" },
			{ value: "Every format", label: "digital, print, video, events, and more" },
			{ value: "Strategy first", label: "every creative decision earns its place" },
		],
		work: [
			{ title: "Creative Strategy & Concepting", description: "The idea behind the execution, grounded in strategy." },
			{ title: "Visual Identity & Brand Design", description: "Logo, color, typography, and the full visual system." },
			{ title: "Content Strategy & Calendar", description: "A disciplined cadence, not sporadic output." },
			{ title: "Campaign Creative Development", description: "Cohesive creative across a full campaign arc." },
			{ title: "Copywriting & Editorial", description: "Writing that carries the brand voice everywhere it appears." },
			{ title: "Presentation & Sales Deck Design", description: "Decks that communicate clearly and land with confidence." },
			{ title: "Digital Asset Production", description: "Web, social, and email creative built for each channel." },
			{ title: "Photography & Video Direction", description: "Authentic visual content that reflects the real brand." },
		],
		valueHeadline: "What changes when creative has a strategy behind it",
		valueSubhead: "Great creative doesn't just communicate better — it builds the kind of brand presence that makes every other marketing investment work harder.",
		value: [
			{ from: "Beautiful but strategically disconnected creative", to: "Design and content that serves a clear goal and moves people to act" },
			{ from: "Ad hoc content with no system", to: "A disciplined content engine with cadence, accountability, and compounding reach" },
			{ from: "Off-brand visuals across channels", to: "Consistent design language that builds recognition with every impression" },
			{ from: "Presentations that don't land", to: "Decks that communicate your story with clarity and confidence" },
			{ from: "Generic stock photography", to: "Authentic visual content that reflects your brand's real identity" },
			{ from: "Creative that lives in a vacuum", to: "Assets built for the specific channel, audience, and goal they serve" },
		],
		whoHeadline: "Organizations that want their brand to look as strong as it actually is",
		whoSubhead: "I work with leaders who know their current creative isn't doing justice to the work they do — and are ready to change that.",
		who: [
			{ title: "Organizations preparing for a major launch or campaign", desc: "Teams building toward a product launch, capital campaign, rebrand reveal, or major initiative — who need the creative strategy and asset production to execute at a level that matches the stakes." },
			{ title: "Brands going through a rebrand or visual refresh", desc: "Organizations whose visual identity has drifted, aged, or no longer reflects who they are — and who need both the design work and the deployment strategy to make the transition stick." },
			{ title: "Teams without dedicated in-house creative capacity", desc: "Organizations that need senior creative direction and execution but aren't at the scale to justify full-time in-house designers, writers, or creative directors — and need a trusted partner instead." },
			{ title: "Organizations needing executive-level content", desc: "Leaders preparing board presentations, investor narratives, media appearances, or keynote addresses who need their ideas shaped into content that's clear, compelling, and professionally designed." },
		],
		finalHeadline: "Ready to build creative that actually moves people?",
		finalSubhead: "Whether you're preparing for a major campaign, rethinking your brand presence, or just need a creative partner who understands strategy — I'd love to hear what you're working toward. Let's start with a conversation.",
	},
];

export function getService(slug: string) {
	return services.find((s) => s.slug === slug);
}
