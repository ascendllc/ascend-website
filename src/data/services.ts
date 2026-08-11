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
	/** Single-sentence teaser used on the homepage and ProVisors solution cards. */
	conceptParagraphs: string[];
	/** Full 3-paragraph copy for the "Concept" section on the individual service page. */
	conceptBody: string[];
	stats: { value: string; label: string }[];
	/** Subhead for the "What I deliver" section on the individual service page. */
	workSubhead: string;
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
		],
		conceptBody: [
			"Most organizations treat marketing as a series of disconnected initiatives — a campaign here, a launch there, a new channel when the last one stalls. The result is unpredictable growth, wasted spend, and a team that can't explain what's working or why.",
			"Growth marketing strategy changes that. It means building the full-funnel architecture that connects every investment to a measurable outcome, aligns creative with conversion data, and turns each campaign into a building block for the next one.",
			"My approach starts with your goals, your audience, and your current state — then builds the strategy, systems, and measurement framework that gives your marketing real traction.",
		],
		stats: [
			{ value: "20+", label: "Years of growth marketing leadership" },
			{ value: "3", label: "Sectors: nonprofit, tech, corporate" },
			{ value: "30+", label: "Country markets managed" },
			{ value: "Record", label: "Q1 donor revenue for Water Mission" },
		],
		workSubhead: "Eight specific engagements that build a complete growth marketing capability from the ground up.",
		work: [
			{ title: "Full-Funnel Strategy Development", description: "Map every stage of the customer journey — from awareness through acquisition, activation, and retention — with clear channel roles, budget rationale, and sequencing logic so every dollar works toward a defined outcome." },
			{ title: "Audience Segmentation & ICP Definition", description: "Research and document ideal customer profiles, persona frameworks, and segmentation logic that sharpen targeting, reduce wasted spend, and ensure your messaging reaches the people most likely to convert." },
			{ title: "Campaign Architecture & Channel Mix", description: "Design integrated campaign structures that align the right message to the right channel at the right moment — balancing paid, organic, email, content, and partner channels based on your goals and resources." },
			{ title: "KPI Frameworks & Measurement Design", description: "Define success metrics, attribution models, and reporting dashboards that connect marketing activity to business outcomes — replacing vanity metrics with the signals that actually drive decisions." },
			{ title: "Go-to-Market Planning", description: "Coordinate product launches, campaign rollouts, and seasonal initiatives with precise sequencing, messaging alignment, and cross-functional dependencies mapped so nothing falls through the cracks." },
			{ title: "Testing Roadmaps", description: "Build structured A/B, messaging, and creative testing programs that compound insights over time — moving from intuition-based decisions to a disciplined learning engine that gets smarter with every campaign." },
			{ title: "Marketing Technology Stack Assessment", description: "Audit your current tools, identify gaps and redundancies, and recommend the right integrations, automation, and infrastructure for your team's scale — so your tech stack accelerates growth instead of slowing it down." },
			{ title: "Executive Reporting & Strategic Insights", description: "Translate performance data into clear strategic recommendations that guide leadership decisions — bridging the gap between marketing execution and boardroom conversations about growth, investment, and direction." },
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
		],
		conceptBody: [
			"Most organizations don't have a messaging problem — they have a consistency problem. The mission lives in a deck. The website says something different. The sales team has its own pitch. The result is a brand that confuses the very people it's trying to reach.",
			"Brand alignment is the work of making sure every message, visual, and conversation is saying the same thing — and that thing is true, differentiated, and resonant with the audiences who matter most.",
			"Storytelling then turns that alignment into connection. It's the craft of finding the human through-line in your work and putting it in words that make people feel something — and do something.",
		],
		stats: [
			{ value: "20+", label: "Years leading brand strategy across sectors" },
			{ value: "30+", label: "Country markets unified under one brand" },
			{ value: "Global", label: "Brand launches at VisionFund & Water Mission" },
			{ value: "Every", label: "Channel: digital, print, events, and sales" },
		],
		workSubhead: "Eight engagements that build a brand people recognize, trust, and choose.",
		work: [
			{ title: "Brand Audit & Diagnosis", description: "Assess brand consistency across every touchpoint — messaging, visuals, digital presence, and team communications — to identify the gaps, contradictions, and missed opportunities that are eroding trust." },
			{ title: "Core Messaging Architecture", description: "Develop the foundational messaging hierarchy: vision, mission, value proposition, proof points, and key differentiators — giving every team member a shared language to work from." },
			{ title: "Audience Narrative Mapping", description: "Craft audience-specific story arcs that connect your mission, product, or cause to the specific needs, motivations, and objections of each key segment you're trying to move." },
			{ title: "Brand Voice & Tone Guide", description: "Define the writing style, personality, and editorial standards that make your brand instantly recognizable — and give your team the tools to write on-brand without constant oversight." },
			{ title: "Visual Identity Alignment", description: "Ensure logos, color systems, typography, imagery, and design patterns work together coherently — creating a visual presence that reinforces your story rather than contradicting it." },
			{ title: "Cross-Channel Brand Governance", description: "Establish the guidelines, templates, and review processes that maintain consistent brand expression across digital, print, events, and partner communications at scale." },
			{ title: "Campaign Narrative Development", description: "Write the through-line story that anchors major campaigns — the central idea that holds together every ad, email, event, and piece of content under one coherent message." },
			{ title: "Executive & Sales Messaging", description: "Distill your brand story into the crisp, confident positioning your leadership needs for investor decks, board presentations, sales conversations, and media appearances." },
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
		],
		conceptBody: [
			"Most organizations invest heavily in top-of-funnel marketing — awareness, demand generation, lead nurturing — and then hand prospects to a sales team that's under-equipped to close them. The result is wasted pipeline and a team that relies on individual talent instead of repeatable process.",
			"Sales enablement is the infrastructure that bridges that gap. It's the messaging, materials, systems, and training that give every rep what they need to have confident, consistent, effective conversations — regardless of tenure or territory.",
			"Done right, it doesn't just improve close rates. It aligns your entire revenue organization around the same story, the same process, and the same metrics.",
		],
		stats: [
			{ value: "HubSpot", label: "CRM strategy and optimization expertise" },
			{ value: "B2B", label: "Complex deal cycle experience" },
			{ value: "Major", label: "Donor development for nonprofits" },
			{ value: "Full", label: "Revenue team alignment: marketing → sales" },
		],
		workSubhead: "Eight engagements that equip your team to sell with confidence at every stage.",
		work: [
			{ title: "Sales Messaging Framework", description: "Develop the core value propositions, objection responses, differentiators, and elevator pitches that give every rep a confident, consistent story — tailored to buyer type and deal stage." },
			{ title: "Buyer Journey Mapping", description: "Document the full path from first awareness to signed agreement, with clear sales touchpoints, decision criteria, and the content or conversations that advance each stage." },
			{ title: "Sales Collateral Development", description: "Create the decks, one-pagers, case study summaries, competitive battle cards, and leave-behinds that equip reps with the right asset at the right moment in every conversation." },
			{ title: "CRM Strategy & Optimization", description: "Design pipeline stages, data fields, contact properties, and workflow automation that keeps reps focused on the right deals — and gives leadership the visibility they need to coach and forecast." },
			{ title: "Sales & Marketing Alignment", description: "Create shared definitions of lead quality, handoff criteria, SLAs, and feedback loops — so marketing knows what sales needs and sales trusts what marketing delivers." },
			{ title: "Onboarding & Training Materials", description: "Build scalable onboarding programs and training assets that get new team members to full productivity faster — without over-relying on tribal knowledge or senior rep time." },
			{ title: "Proposal & RFP Templates", description: "Develop reusable, customizable proposal frameworks and RFP response templates that accelerate deal cycles, reduce rep effort, and maintain a consistent brand voice under pressure." },
			{ title: "Revenue Metrics & Reporting", description: "Design the dashboards and KPIs that connect sales activity to business outcomes — giving leaders the data they need to identify bottlenecks, coach performance, and forecast with confidence." },
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
		],
		conceptBody: [
			"Most organizations spend 80% of their marketing budget on acquiring new customers or donors — and almost nothing on keeping them. The result is a leaky bucket: constant effort to replace people who shouldn't have left in the first place.",
			"Lifecycle marketing is about changing that equation. It means engineering the full arc of the relationship — from first impression through onboarding, deep engagement, potential lapse, and eventual advocacy — with thoughtful, automated touchpoints that deliver value at every stage.",
			"When done right, it's not just more efficient. It's fundamentally how organizations build communities, not just customer lists.",
		],
		stats: [
			{ value: "Record", label: "Q1 donor revenue through lifecycle reactivation" },
			{ value: "30+", label: "Country programs unified in lifecycle strategy" },
			{ value: "Email", label: "Architecture from welcome to win-back" },
			{ value: "Always", label: "On — journeys that work around the clock" },
		],
		workSubhead: "Eight systems that turn your audience from contacts into community.",
		work: [
			{ title: "Lifecycle Stage Mapping", description: "Define the full spectrum of your customer or donor relationship — from initial awareness through activation, engagement, advocacy, and beyond — with clear transition criteria and ownership at every stage." },
			{ title: "Onboarding Journey Design", description: "Create the first 30, 60, and 90 day communication sequences that set expectations, deliver early value, and build the habits that turn first-time participants into long-term advocates." },
			{ title: "Retention & Nurture Campaigns", description: "Build automated nurture tracks for engaged segments that deepen the relationship over time — with the right content, at the right cadence, triggered by behavior rather than arbitrary time intervals." },
			{ title: "Reactivation Programs", description: "Develop systematic win-back and re-engagement campaigns that identify lapsed audiences and bring them back with the right message before they're gone for good." },
			{ title: "Loyalty & Advocacy Systems", description: "Design the referral, recognition, and loyalty programs that transform your best customers or donors into active champions — expanding your reach through the most credible channel you have." },
			{ title: "Segmentation Strategy", description: "Build the audience segmentation logic that powers personalization at scale — defining the criteria, data signals, and segment boundaries that make automated communications feel personal and relevant." },
			{ title: "Email Marketing Architecture", description: "Design the email program structure, template system, list hygiene practices, and performance benchmarks that make your email channel a reliable, high-ROI asset rather than a source of deliverability problems." },
			{ title: "Testing & Optimization Roadmap", description: "Establish ongoing testing programs for subject lines, content, timing, and sequence logic — building a disciplined learning engine that compounds improvements over time." },
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
		],
		conceptBody: [
			"The organizations that win at digital acquisition aren't the ones with the biggest budgets. They're the ones that have built the systems to know what's working, eliminate what isn't, and scale the winners — fast.",
			"Digital acquisition strategy means designing the integrated channel ecosystem that puts your message in front of the right people at the right moment — and then converting that attention into the contacts, donors, or customers your organization needs to grow.",
			"My approach combines channel strategy, creative intelligence, conversion optimization, and attribution design into a single, coherent system — so growth is repeatable, not random.",
		],
		stats: [
			{ value: "Multi", label: "Channel: paid, organic, social, content, email" },
			{ value: "B2B", label: "& nonprofit digital acquisition expertise" },
			{ value: "SEO", label: "GEO, AEO and IEO optimization strategy" },
			{ value: "Data", label: "Attribution from first touch to conversion" },
		],
		workSubhead: "Eight engagements that build a scalable digital acquisition engine from the ground up.",
		work: [
			{ title: "Digital Channel Strategy", description: "Assess and select the right mix of paid, organic, social, and content channels based on where your audience actually is — and design the role each channel plays in the full acquisition funnel." },
			{ title: "Paid Media Planning & Optimization", description: "Design and manage paid search, social, display, and retargeting programs with clear targeting logic, creative testing frameworks, and performance benchmarks tied to real business outcomes." },
			{ title: "SEO & Content Strategy", description: "Build the organic search foundation that drives sustainable, compounding traffic — from keyword architecture and content mapping through technical SEO and editorial calendar development." },
			{ title: "Landing Page & Conversion Optimization", description: "Design and test high-converting landing experiences that turn traffic into leads, donors, or customers — with clear value propositions, friction-reducing design, and systematic A/B testing." },
			{ title: "Lead Generation Programs", description: "Develop the offers, gated assets, forms, and nurture sequences that fill the top of funnel with qualified prospects — and hand them to sales or development teams ready for conversion." },
			{ title: "Social Media Strategy", description: "Build channel-specific strategies for organic growth, audience development, and community building — tailored to platform behavior, content formats, and your audience's native consumption habits." },
			{ title: "Analytics & Attribution", description: "Implement the tracking infrastructure, attribution models, and reporting dashboards that show exactly what's driving acquisition — and give you the data to invest more of what works." },
			{ title: "Growth Experimentation Framework", description: "Design the testing infrastructure and experimentation cadence that identifies winning channels, messages, and offers — and builds a culture of data-driven decision-making across the marketing team." },
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
		],
		conceptBody: [
			"The most common creative mistake isn't bad design — it's design disconnected from strategy. Assets that look polished but don't communicate a clear value. Content that fills a calendar but doesn't move an audience. Campaigns that win awards but don't win customers.",
			"Creative strategy changes that by starting with the audience, the goal, and the insight — and then building the visual and written expression that serves all three. Every asset has a job to do, and the best creative makes it look effortless.",
			"My approach combines strategic concepting, brand-level design thinking, and the executional capability to take an idea from whiteboard to final asset — at the quality level your brand deserves.",
		],
		stats: [
			{ value: "20+", label: "Years of brand and campaign creative leadership" },
			{ value: "Global", label: "Campaigns across 30+ country markets" },
			{ value: "Every", label: "Format: digital, print, video, events, and more" },
			{ value: "Strategy", label: "First — every creative decision earns its place" },
		],
		workSubhead: "Eight creative and content capabilities that build the full expression of your brand.",
		work: [
			{ title: "Creative Strategy & Concepting", description: "Develop the big idea and creative direction that anchors campaigns — the central concept that gives every asset a coherent identity and makes the campaign unmistakably yours." },
			{ title: "Visual Identity & Brand Design", description: "Design or refine logos, color systems, typography hierarchies, and brand asset libraries that create a visual presence that's consistent, distinctive, and built to scale across teams and channels." },
			{ title: "Content Strategy & Calendar", description: "Build the editorial framework, topic architecture, publishing cadence, and content mix that turns scattered output into a disciplined content program that serves real audience and SEO goals." },
			{ title: "Campaign Creative Development", description: "Produce the full creative suite for major campaigns — from concept and copy through final assets across every format: digital ads, email, landing pages, social, and print." },
			{ title: "Copywriting & Editorial", description: "Write the headlines, body copy, email sequences, website content, and long-form pieces that communicate your value clearly and move your audience toward the action you want them to take." },
			{ title: "Presentation & Sales Deck Design", description: "Create compelling, polished decks for leadership presentations, investor conversations, board meetings, and sales pitches — where the design amplifies the message rather than competing with it." },
			{ title: "Digital Asset Production", description: "Develop the full library of social graphics, email templates, digital ads, and landing page designs that equip your team to publish consistently and on-brand at speed." },
			{ title: "Photography & Video Direction", description: "Plan and oversee visual content production — from brand shoots and event photography to video concepts and storyboards — ensuring the visual story you tell matches the brand you've built." },
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
