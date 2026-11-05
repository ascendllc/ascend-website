import type { Insight } from "./insights";

// Answer-first articles written around the questions buyers (and AI assistants on their behalf)
// actually ask. Each opens with the direct answer, then supports it. Kept in its own file so the
// original articles in insights.ts stay untouched.
const published = { publishedDate: "2026-11-04", dateDisplay: "November 4, 2026" };

export const novemberInsights: Insight[] = [
	{
		slug: "how-to-get-recommended-by-ai-assistants",
		title: "How to Get Your Business Recommended by ChatGPT, Perplexity, and Other AI Assistants",
		metaTitle: "Get Recommended by AI Assistants | Ascend Consulting",
		metaDescription: "AI assistants recommend businesses they can clearly identify, verify, and quote. Here are the practical steps that make your business easy for them to cite.",
		excerpt:
			"AI assistants don't rank pages the way Google does. They assemble answers from sources they can understand and trust. Here is what makes a business easy to recommend, and what to do about it.",
		...published,
		readingTime: "6 min read",
		relatedLink: { href: "/services/growth-marketing-strategy", label: "See Growth Marketing Strategy" },
		sections: [
			{
				paragraphs: [
					"The short answer: AI assistants recommend businesses that are easy to identify, easy to verify, and easy to quote. If your name, what you do, who you serve, and where you operate are stated clearly and consistently across your site and the wider web, assistants can describe you accurately. If they are vague or contradictory, assistants skip you or get you wrong.",
					"This is the practical core of what is now called generative engine optimization (GEO). Nobody outside the AI companies can promise a specific outcome, but the inputs that help are well understood.",
				],
			},
			{
				heading: "1. State exactly who you are and what you do",
				paragraphs: [
					"Put a plain, factual description of the business on your homepage and About page: the name, what you offer, who you serve, where you are based, and who runs it. Avoid slogans as your only description. An assistant answering a question like 'Who helps nonprofits with brand strategy in Washington?' needs sentences it can lift, not taglines.",
				],
			},
			{
				heading: "2. Make your claims verifiable",
				paragraphs: [
					"Assistants favor sources that show their work. Name the clients, outcomes, and credentials you can back up, link to the case studies, and keep the numbers consistent everywhere they appear. A claim that appears once, with no supporting page, carries little weight.",
				],
			},
			{
				heading: "3. Use structured data to remove guesswork",
				paragraphs: [
					"Schema.org markup (JSON-LD) tells machines what a page is about in a format they do not have to interpret. At a minimum, mark up the organization, the people behind it, each service, articles, and your frequently asked questions. Link them together so the organization, its founder, and its pages are clearly one connected entity.",
				],
			},
			{
				heading: "4. Be present where assistants look",
				paragraphs: [
					"Assistants draw on more than your website. Consistent profiles on LinkedIn, in business directories, and on sites that mention you help confirm that you are real and that your description is accurate. Make sure the name, description, and location match everywhere.",
				],
			},
			{
				heading: "5. Let the crawlers in",
				paragraphs: [
					"Check your robots.txt. Search-focused AI crawlers (such as OAI-SearchBot, Claude-SearchBot, and PerplexityBot) need access if you want to appear in their answers. Also publish a clear sitemap and, as an emerging convention, an llms.txt file that summarizes your key pages in plain text.",
				],
			},
			{
				heading: "6. Write answers, not just pages",
				paragraphs: [
					"Structure content around real questions, with the direct answer in the first sentence or two and the explanation after. Pages built this way are easy for assistants to quote and easy for people to scan.",
				],
			},
			{
				paragraphs: [
					"None of this replaces traditional SEO. A site that search engines can crawl, understand, and trust is also the site AI assistants can use. The two disciplines reinforce each other, which is why Ascend builds them into every engagement rather than selling them as add-ons.",
				],
			},
		],
	},
	{
		slug: "aeo-checklist",
		title: "An AEO Checklist: How to Structure Your Website So Answer Engines Can Quote It",
		metaTitle: "AEO Checklist for Your Website | Ascend Consulting",
		metaDescription: "A practical answer engine optimization (AEO) checklist: how to write, structure, and mark up pages so search engines and AI assistants can quote them.",
		excerpt:
			"Answer engine optimization is about making your content the clearest, most quotable answer to a real question. Here is a practical checklist you can apply to any page.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/insights/seo-vs-geo-vs-aeo", label: "Read: SEO vs. GEO vs. AEO" },
		sections: [
			{
				paragraphs: [
					"Answer engine optimization (AEO) is the practice of structuring content so that search engines, voice assistants, and AI tools can extract a direct answer from it and attribute it to you. The checklist below works page by page.",
				],
			},
			{
				heading: "Content",
				paragraphs: ["Start with the questions your customers actually ask, then check each page against these points:"],
				list: [
					"The page targets one clear question or topic, stated in the title and the main heading.",
					"The direct answer appears in the first one or two sentences, before the background.",
					"Headings are written as the questions or topics people search for, not as clever phrases.",
					"Definitions are explicit: 'X is...' sentences that can stand alone when quoted.",
					"Lists and short steps are used where the answer is a list or a process.",
					"Facts, prices, and claims are specific and consistent with every other page on the site.",
				],
			},
			{
				heading: "Credibility",
				paragraphs: ["Answer engines prefer sources they can attribute to a real, qualified author."],
				list: [
					"Every article has a named author with a short bio and a link to a fuller profile.",
					"Publication and last-updated dates are visible and accurate.",
					"Claims link to supporting pages, such as case studies or sources.",
					"The About page states who is behind the business and their experience.",
				],
			},
			{
				heading: "Technical",
				paragraphs: ["These make the content machine-readable and easy to crawl."],
				list: [
					"FAQPage, Article, Service, and Organization schema (JSON-LD) are present and valid.",
					"Each page has one canonical URL, listed in the sitemap, and noindexed pages are not in the sitemap.",
					"Pages load fast and render their main content without needing JavaScript.",
					"Robots.txt allows search and AI crawlers you want to be found by.",
					"Titles stay near 60 characters and descriptions near 155, each written to match the page's actual answer.",
				],
			},
			{
				heading: "Measurement",
				paragraphs: [
					"Track impressions and clicks in Google Search Console and Bing Webmaster Tools, and periodically ask the major AI assistants the questions your customers ask. Note whether you are mentioned, whether the description is accurate, and which pages they cite. Fix the gaps and repeat.",
				],
			},
		],
	},
	{
		slug: "marketing-consultant-vs-agency-vs-in-house",
		title: "Marketing Consultant vs. Agency vs. In-House Hire: How to Choose",
		metaTitle: "Consultant vs. Agency vs. In-House | Ascend Consulting",
		metaDescription: "How do you choose between a marketing consultant, an agency, and an in-house hire? A plain comparison of cost structure, expertise, speed, and fit.",
		excerpt:
			"Each option solves a different problem. Here is how a marketing consultant, an agency, and an in-house hire compare, and how to match the choice to your situation.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/contact", label: "Talk With Ascend" },
		sections: [
			{
				paragraphs: [
					"The short answer: hire a consultant when you need senior strategy and direction, an agency when you need a large volume of specialized production, and an in-house hire when you have steady, ongoing work that needs a dedicated person. Many organizations use more than one, in sequence.",
				],
			},
			{
				heading: "Marketing consultant",
				paragraphs: [
					"A consultant brings senior-level thinking to a defined problem: positioning, a go-to-market plan, a brand relaunch, a growth system. You work directly with the experienced person rather than a layered team. It suits organizations that need expertise they cannot justify as a full-time executive, or that need an outside view to set direction before building a team.",
					"The trade-off: a single consultant has finite capacity, so large, simultaneous production needs may call for added help. A good consultant will say so and bring in specialists from a partner network where it makes sense.",
				],
			},
			{
				heading: "Agency",
				paragraphs: [
					"An agency offers a bench of specialists, such as designers, developers, media buyers, and writers, and can produce a lot of work in parallel. It suits organizations with a clear brief and the internal capacity to direct it. The trade-offs are typically higher overhead, and senior attention that can thin out once a project is underway.",
				],
			},
			{
				heading: "In-house hire",
				paragraphs: [
					"A full-time marketer knows the business deeply and is always available. It suits steady, ongoing workloads. The trade-offs are fixed cost, the time it takes to hire well, and the difficulty of finding one person with both strategic and hands-on skills.",
				],
			},
			{
				heading: "How to decide",
				paragraphs: ["Ask four questions:"],
				list: [
					"Do we need direction, or do we need production? Direction points to a consultant; production points to an agency or in-house team.",
					"Is the work a project or a permanent function? Projects favor consultants and agencies; permanent functions favor hires.",
					"How much senior attention do we need? If a lot, make sure you will actually have access to the senior person.",
					"What can we sustain after the engagement ends? Choose the option that leaves you with systems your team can run.",
				],
			},
			{
				paragraphs: [
					"Ascend Consulting works as a strategic partner: senior marketing leadership and hands-on execution from the founder, with a partner network for specialized work. The first conversation is free and focused on whether it is the right fit.",
				],
			},
		],
	},
	{
		slug: "what-does-a-strategic-marketing-consultant-do",
		title: "What Does a Strategic Marketing Consultant Actually Do?",
		metaTitle: "What a Strategic Marketing Consultant Does | Ascend",
		metaDescription: "A strategic marketing consultant diagnoses what is holding growth back and builds the plan and systems to fix it. Here is what that looks like in practice.",
		excerpt:
			"A strategic marketing consultant does more than run campaigns. Here is what the work actually involves, from diagnosis to systems, and when it is worth hiring one.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/services/growth-marketing-strategy", label: "See Growth Marketing Strategy" },
		sections: [
			{
				paragraphs: [
					"A strategic marketing consultant works out what is holding an organization's growth back and builds the plan, messaging, and systems to fix it. The emphasis is on the choices that make every later marketing dollar work harder, not on any single campaign.",
				],
			},
			{
				heading: "Diagnose",
				paragraphs: [
					"The work starts with understanding the business: who the best customers or supporters are, why they choose you, where prospects drop out, and what the current marketing is and is not doing. A consultant reviews the brand, the website, the data, and the sales or donor process to find the real constraint rather than the most visible symptom.",
				],
			},
			{
				heading: "Decide",
				paragraphs: [
					"Next comes the strategy: who to focus on, how to position against alternatives, what to say, and which channels deserve investment. Just as important is what to stop doing. A good strategy makes trade-offs explicit.",
				],
			},
			{
				heading: "Build",
				paragraphs: [
					"Strategy becomes real through systems and assets: a clear brand and message, a website that converts, lifecycle communications, sales and fundraising tools, measurement, and the processes that connect them. Ascend structures this work around seven service lines, from Growth Marketing Strategy to Creative Design & Content Development.",
				],
			},
			{
				heading: "Measure and improve",
				paragraphs: [
					"A consultant sets up the measurement that shows what is working, then adjusts. The goal is a marketing function that keeps improving after the engagement, not one that depends on the consultant.",
				],
			},
			{
				heading: "When it is worth hiring one",
				paragraphs: ["A consultant tends to add the most value when:"],
				list: [
					"Marketing activity is high but results are unclear.",
					"The organization is changing: a launch, a rebrand, new markets, or a leadership change.",
					"Sales and marketing are not working from the same story or data.",
					"You need senior judgment but not a full-time executive.",
				],
			},
		],
	},
	{
		slug: "rebrand-or-refresh",
		title: "Rebrand or Refresh? How to Know Which One Your Organization Needs",
		metaTitle: "Rebrand or Refresh? How to Decide | Ascend Consulting",
		metaDescription: "A refresh updates how your brand looks; a rebrand changes what it stands for. Here is how to tell which your organization needs, and what each involves.",
		excerpt:
			"A refresh updates the look of a brand that still fits. A rebrand rethinks the brand itself. Here is how to tell which your organization needs.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/brandrise", label: "Explore BrandRise™ Packages" },
		sections: [
			{
				paragraphs: [
					"The short answer: refresh when the brand still describes who you are but looks dated; rebrand when who you are, who you serve, or what you offer has changed enough that the current brand no longer fits. The difference is whether the problem is presentation or substance.",
				],
			},
			{
				heading: "Signs you need a refresh",
				list: [
					"People understand what you do and why you matter, but the visuals feel old or inconsistent.",
					"The logo, colors, and templates work, but they are applied differently across channels.",
					"The website is outdated even though the positioning is still right.",
				],
				paragraphs: ["A refresh keeps the strategy and updates the expression: the visual system, templates, and website, applied consistently."],
			},
			{
				heading: "Signs you need a rebrand",
				list: [
					"The organization has grown, merged, or changed direction and the brand describes the past.",
					"Different parts of the organization describe it differently, or operate under separate identities.",
					"You are entering a new market or serving a different audience.",
					"The name, message, or reputation is a barrier to growth.",
				],
				paragraphs: ["A rebrand starts with strategy: audience, positioning, and messaging. The visual identity and website then express that strategy."],
			},
			{
				heading: "What the work involves",
				paragraphs: [
					"Either path should begin with research and a clear brief, then move through strategy, identity, messaging, and a website that reflects it, and end with a plan for launch and consistent use. Brand standards matter in both cases, because inconsistency is what makes brands look dated again.",
					"Ascend has led both kinds of work, including unifying more than thirty separately branded organizations under one global brand for VisionFund International. For organizations that want a clear scope and price, BrandRise packages the process into defined tiers.",
				],
			},
		],
	},
	{
		slug: "nonprofit-marketing-strategy",
		title: "Nonprofit Marketing Strategy: What Actually Drives Donor Growth",
		metaTitle: "Nonprofit Marketing & Donor Growth | Ascend Consulting",
		metaDescription: "Donor growth comes from clear messaging, targeted acquisition, and strong retention working together. Here is how nonprofit marketing strategy fits together.",
		excerpt:
			"Donor growth is rarely about one tactic. It comes from a clear story, the right audiences, timely moments, and retention that keeps supporters giving. Here is how it fits together.",
		...published,
		readingTime: "6 min read",
		relatedLink: { href: "/case-study/water-mission-growth", label: "Read the Water Mission case study" },
		sections: [
			{
				paragraphs: [
					"The short answer: nonprofit donor growth comes from four things working together: a clear, emotionally credible story; precise targeting of the people most likely to give; the right campaign at the right moment; and a retention program that turns first gifts into lasting support.",
				],
			},
			{
				heading: "1. A story donors can repeat",
				paragraphs: [
					"Donors give to outcomes they understand and trust. The organization's message should say, in plain language, who is helped, how, and what a gift makes possible. Consistency across the website, email, social media, and appeals matters more than novelty.",
				],
			},
			{
				heading: "2. Know who is most likely to give",
				paragraphs: [
					"Acquisition spending works best when aimed at audiences that resemble your best existing supporters. That means segmenting current donors by behavior, then using that profile to guide paid media, search, and partnerships, rather than broadcasting to everyone.",
				],
			},
			{
				heading: "3. Be ready for moments that matter",
				paragraphs: [
					"Year-end giving, seasonal campaigns, and urgent events concentrate generosity. Organizations that plan creative, landing pages, and messaging ahead of those moments can respond quickly and credibly. Ascend's work with Water Mission, including a rapid digital response to a major hurricane, is an example of preparation paying off in real time.",
				],
			},
			{
				heading: "4. Retention is the multiplier",
				paragraphs: [
					"Acquiring a donor is expensive; keeping one is where growth compounds. A thoughtful welcome series, regular reporting on impact, timely thanks, and a path to recurring giving all increase lifetime value. Reactivating lapsed supporters is often the fastest source of new revenue.",
				],
			},
			{
				heading: "5. Measure what drives revenue",
				paragraphs: [
					"Track the numbers that connect marketing to giving: new and retained donors, average gift, conversion on donation pages, and revenue by channel. Reports should show leadership what to do next, not just what happened.",
				],
			},
			{
				paragraphs: [
					"Brad Stave has led marketing at Water Mission and VisionFund International, and Ascend brings that nonprofit experience to organizations of every size. Read the Water Mission case study for how these pieces came together.",
				],
			},
		],
	},
	{
		slug: "what-is-sales-enablement",
		title: "What Is Sales Enablement? A Practical Guide for Marketing Leaders",
		metaTitle: "What Is Sales Enablement? | Ascend Consulting",
		metaDescription: "Sales enablement gives sellers the content, tools, training, and process to close deals. Here is what it includes and how marketing and sales share it.",
		excerpt:
			"Sales enablement closes the gap between marketing investment and revenue by giving sellers what they need to win. Here is what it includes and how to start.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/services/sales-enablement", label: "See Sales Enablement" },
		sections: [
			{
				paragraphs: [
					"Sales enablement is the practice of giving a sales team the content, tools, training, and process they need to move buyers from interest to a closed deal. It is where marketing's work becomes revenue, and where gaps between the two teams show up first.",
				],
			},
			{
				heading: "What sales enablement includes",
				list: [
					"Messaging and positioning that sellers can use in real conversations, including how to handle common objections.",
					"Content mapped to the buying journey: case studies, comparison sheets, proposals, and presentations.",
					"Tools and systems, such as a CRM set up to support the process and make the next step obvious.",
					"Training and coaching so the team can use the materials confidently.",
					"Measurement that connects activity to pipeline and revenue.",
				],
				paragraphs: [],
			},
			{
				heading: "Why it matters",
				paragraphs: [
					"When marketing and sales tell different stories, buyers notice. Enablement aligns both teams around one buyer, one message, and one definition of a qualified lead. It also shortens ramp-up for new sellers, because the playbook already exists.",
				],
			},
			{
				heading: "How to start",
				list: [
					"Interview sellers and review lost deals to find where deals stall.",
					"Map the buying journey and the questions buyers ask at each stage.",
					"Fill the biggest content gap first, usually proof (case studies) and objection handling.",
					"Put materials where sellers work, and train on them.",
					"Review pipeline data regularly and retire what is not used.",
				],
				paragraphs: [],
			},
			{
				paragraphs: [
					"Ascend has built enablement programs for global technology brands and for marketing teams adopting account-based marketing. The common thread is a short list of materials the team actually uses.",
				],
			},
		],
	},
	{
		slug: "why-start-a-brand-podcast",
		title: "Why a Podcast Can Be a Smart Brand Asset (and What It Takes to Do It Well)",
		metaTitle: "Why Start a Brand Podcast? | Ascend Consulting",
		metaDescription: "A podcast builds authority, relationships, and a library of content. Here is what a good one requires, from concept and audio to promotion and consistency.",
		excerpt:
			"A well-run podcast builds authority, opens doors, and produces content for years. Here is what it takes to do one well, and where most shows go wrong.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/services/podcast-production", label: "See Podcast Production" },
		sections: [
			{
				paragraphs: [
					"A podcast can be a smart brand asset because it builds trust in a way short-form content cannot, creates relationships with the guests and listeners who matter to you, and turns each conversation into articles, clips, and posts. It works when it is treated as a long-term program, not a one-off.",
				],
			},
			{
				heading: "What a podcast does for a brand",
				list: [
					"Authority: long-form conversation shows depth of thinking.",
					"Relationships: interviews open doors to people you would like to know.",
					"Content: every episode can become a transcript, article, clips, and social posts.",
					"Search and AI visibility: transcripts and show notes add answers to questions your audience asks.",
				],
				paragraphs: [],
			},
			{
				heading: "What it takes to do well",
				list: [
					"A clear concept: who the show is for and why it is different from the alternatives.",
					"Good audio: clear recording and professional editing matter more than anything on screen.",
					"Consistency: a regular release rhythm that you can sustain.",
					"A home on the web: a website with episode pages, transcripts, and clear next steps.",
					"Promotion: sharing every episode and repurposing it across channels and search.",
				],
				paragraphs: [],
			},
			{
				heading: "Where most shows go wrong",
				paragraphs: [
					"Most shows stall because the effort was underestimated: no clear audience, uneven audio, or no plan for promotion. Treating production, the website, and promotion as one system removes most of that risk.",
					"Brad Stave hosts The Wide Lens Podcast and produces shows end to end, from concept and audio engineering to the website and promotion. Ascend's Podcast Production service brings that same approach to clients.",
				],
			},
		],
	},
	{
		slug: "new-website-seo-geo-aeo-checklist",
		title: "Launching a New Website? The SEO, GEO, and AEO Checklist",
		metaTitle: "New Website SEO, GEO & AEO Checklist | Ascend",
		metaDescription: "Before a new site goes live, check redirects, crawlability, metadata, structured data, speed, and answer-first content. A launch-day checklist for modern search.",
		excerpt:
			"The best time to build search visibility into a website is before launch. Here is a checklist covering SEO, GEO, and AEO so nothing is missed on launch day.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/brandrise", label: "Explore BrandRise™ Packages" },
		sections: [
			{
				paragraphs: [
					"Launching a website without a search plan means fixing avoidable problems later, usually after traffic has been lost. Use this checklist before launch and again within the first month.",
				],
			},
			{
				heading: "Before launch",
				list: [
					"Map every old URL to its new equivalent and set up permanent (301) redirects.",
					"Confirm the site is not blocked by robots.txt or a leftover noindex tag.",
					"Give every page a unique title and meta description that match its content.",
					"Use one H1 per page and a logical heading structure.",
					"Set one canonical URL per page, using one consistent address format.",
					"Add descriptive alt text to meaningful images and compress images for speed.",
					"Check mobile layout, page speed, and Core Web Vitals.",
				],
				paragraphs: [],
			},
			{
				heading: "For AI and answer engines",
				list: [
					"Add structured data for the organization, people, services, articles, and FAQs, and validate it.",
					"Write key pages answer-first, with the direct answer at the top.",
					"Add FAQ sections covering real customer questions.",
					"Show author names, bios, and publication or update dates on articles.",
					"Allow search-focused AI crawlers in robots.txt and publish an llms.txt summary.",
				],
				paragraphs: [],
			},
			{
				heading: "On launch day",
				list: [
					"Submit the XML sitemap in Google Search Console and Bing Webmaster Tools.",
					"Check that key pages are indexable and that noindexed pages are excluded from the sitemap.",
					"Test forms, tracking, and analytics.",
				],
				paragraphs: [],
			},
			{
				heading: "In the first month",
				paragraphs: [
					"Watch crawl errors and indexing reports, fix broken links, and review which queries the site appears for. Ask AI assistants the questions your customers ask and note whether you are described correctly. Small corrections early compound.",
				],
			},
		],
	},
	{
		slug: "lifecycle-marketing-explained",
		title: "Lifecycle Marketing Explained: From First Touch to Lifelong Customer",
		metaTitle: "Lifecycle Marketing Explained | Ascend Consulting",
		metaDescription: "Lifecycle marketing plans communication for every stage of the relationship, from first touch to loyal advocate. Here is how it works and why it pays off.",
		excerpt:
			"Lifecycle marketing treats the relationship as a journey, with the right message at each stage. Here is how it works and how to start.",
		...published,
		readingTime: "5 min read",
		relatedLink: { href: "/services/lifecycle-marketing-systems", label: "See Lifecycle Marketing Systems" },
		sections: [
			{
				paragraphs: [
					"Lifecycle marketing is the practice of planning communication for every stage of a customer's or supporter's relationship with you, from first awareness to loyal advocate, instead of focusing only on winning the first sale. It matters because retaining and growing existing relationships is usually more efficient than constantly finding new ones.",
				],
			},
			{
				heading: "The stages",
				list: [
					"Awareness: the person learns you exist and what you stand for.",
					"Consideration: they compare options and look for proof.",
					"Conversion: they take the first step, such as buying, booking, or giving.",
					"Onboarding: they are welcomed and shown how to get value quickly.",
					"Retention and growth: they keep engaging, and are offered relevant next steps.",
					"Advocacy: satisfied people recommend you and share their stories.",
				],
				paragraphs: [],
			},
			{
				heading: "What the system looks like",
				paragraphs: [
					"In practice it is a set of automated and personal communications connected by data: a welcome series, behavior-triggered messages, re-engagement for people who have gone quiet, and regular updates that keep people informed. A CRM holds the information, and each message is triggered by what the person has done.",
				],
			},
			{
				heading: "How to start",
				list: [
					"Map the journey your best customers actually take.",
					"Identify the biggest drop-off, often right after the first purchase or gift.",
					"Build one automated sequence to fix it, such as a welcome series.",
					"Measure the result, then add the next stage.",
				],
				paragraphs: [],
			},
			{
				paragraphs: [
					"Ascend designs lifecycle marketing systems for businesses and nonprofits, and the same approach applies to donors as to customers: earn trust early, help people see the value, and make staying easy.",
				],
			},
		],
	},
];
