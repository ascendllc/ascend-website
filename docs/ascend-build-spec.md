# Rebuild Instructions: ascendsmartly.com (Replit → Astro)

This file tells Claude Code how to rebuild the Ascend Consulting website (currently live at
https://www.ascendsmartly.com, built on Replit) as a new Astro project. It was compiled by
crawling the live site on 2026-08-10, so it reflects the current, real content, structure, and
copy. Use this as the source of truth for what to build; ask Brad before inventing content that
isn't captured here.

Drop this file in the root of the new Astro project (rename to `CLAUDE.md`) and run `claude`
from that directory to start building against it.

## 1. What this site is

Ascend Consulting is Brad Stave's marketing and growth consultancy, based in Tacoma, WA. The
site sells strategic marketing consulting, a productized branding offer called BrandRise™, and a
couple of niche verticals (industry solutions for legal/finance, exit-ready branding for M&A,
and real estate listing marketing). Primary conversion action across the whole site is
"Schedule a Consultation," which links to a Google Calendar booking page.

Brand color: navy blue `#1B2870` (site theme-color). Logo file is `ascend-logo-white.webp` (white
version, used on a dark/navy header). There's a hero photo of Brad Stave and a case-study photo
set. Treat these as placeholder assets to re-source from Brad rather than inventing new brand
photography.

There's a small AI chat widget in the corner of every page labeled "Ava — Ascend Consulting
Guide." Note it exists as a feature to replicate (or stub out) but don't try to reverse-engineer
its backend from the crawl; ask Brad what's powering it (this is likely a Replit-integrated
chatbot and probably the single hardest piece to port 1:1 — flag this to him early).

## 2. Recommended stack for the Astro rebuild

- Astro with the `minimal` starter template
- Tailwind CSS for styling (add via `astro add tailwind`) — the site's design is component/card
  heavy (pricing tiers, before/after grids, numbered service cards, logo carousels, accordions),
  which Tailwind handles well
- Static output for all marketing pages (no server rendering needed except possibly the chat
  widget and any lead-capture forms)
- Forms: current site likely posts through Replit's backend. For Astro, plan on a form service
  (e.g., a simple serverless function, Formspree, or similar) for the intake form and Care
  Plan/tier inquiry buttons — ask Brad what he wants to use before building this piece

## 3. Site map

- `/` — Home
- `/brandrise` — BrandRise™ tiered packages
- `/industry-solutions` — Legal & accounting/finance vertical (also appears to be a ProVisors
  referral landing variant — has a "Back to ProVisors" link, confirm with Brad if this needs a
  distinct route)
- `/exit-ready-brand` — M&A brand readiness offer
- `/real-estate-marketing` — Real estate listing marketing (Brad's own licensed-broker service)
- `/resources` — Partners, case studies, portfolio, testimonials, FAQ (single long page with
  in-page anchors: `#partners`, `#case-studies`, `#portfolio`, `#testimonials`, `#faq`)
- `/services/growth-marketing-strategy`
- `/services/brand-alignment-storytelling`
- `/services/sales-enablement`
- `/services/lifecycle-marketing-systems`
- `/services/digital-acquisition-growth`
- `/services/creative-design-content-development`
- `/terms-and-conditions` — Legal boilerplate (consulting agreement terms)

Global nav: About · Solutions (dropdown: BrandRise™, Industry Solutions, Exit-Ready Brand, "All
Solutions →") · Why Ascend · Resources (dropdown: Partners, Case Studies, Portfolio, Testimonials,
FAQs, "All Resources →") · Contact · "Schedule Consultation" button (persistent CTA in header).
"About" and "Why Ascend" appear to be in-page anchors on the homepage rather than separate
routes — confirm exact anchor targets by inspecting the live site's nav behavior if pixel-perfect
nav parity matters.

Footer on every page: logo, contact block (Brad Stave, Tacoma WA, brad@ascendsmartly.com,
+1.253.486.2452, ascendsmartly.com), copyright line, link to Terms & Conditions.

## 4. Global contact / booking info

- Email: brad@ascendsmartly.com
- Phone: +1.253.486.2452
- Location: Tacoma, WA
- Consultation booking link: https://calendar.app.google/fc6onovGBHBH9RWn9
- Real estate contact (separate, used only on `/real-estate-marketing`): 253.486.2452,
  brad@pugetsoundlife.com, pugetsoundlife.com, 7525 28th St W, University Place, WA 98466,
  WA Real Estate Broker License #25024602, affiliated with The Medford Team Real Estate Team,
  Keller Williams Realty

## 5. Page-by-page content

### Home (`/`)

SEO title: "Ascend Consulting | Strategic Marketing & Growth Consulting | Brad Stave"
Meta description: "Ascend Consulting helps nonprofits and businesses rise with purpose —
combining strategic marketing, brand development, AI-powered systems, podcast production, and
measurable growth. Founded by Brad Stave in Tacoma, WA."

**Hero**
Eyebrow: "A Strategic Marketing & Growth Consultancy"
H1: "Say It Better. Show Up Stronger. Grow Faster."
Subhead: "Ascend Consulting helps organizations build stronger brands, communicate with clarity,
reach the right audiences, and develop acquisition strategies that deliver real, measurable
results."
CTAs: "Schedule a Consultation" (primary) / "Explore Our Work" (secondary)
Below hero: BrandRise™ promo card — "Introducing: BrandRise™ — Your complete solution for
building or relaunching your organization's brand, marketing, and promotional presence." Tags:
Brand / Marketing / Promotion. "Starting at $250." CTA: "See What's Included in BrandRise™" →
`/brandrise`

**Trust bar**: "Trusted leadership experience across" — logo row: Dell, HP, Lenovo, Microsoft,
World Vision, Zones, Trail Life USA, Water Mission, Sensient, Keller Williams

**Founder intro section**
Photo + name: Brad Stave, Founder & Principal
H2: "Your Value Is Real. Is the Market Seeing It Clearly?"
Body: "Most organizations are too close to their own work to see what's unclear from the
outside. Your product, mission, or service is strong — but if your messaging is inconsistent,
your target audience is undefined, or your acquisition strategy runs more on instinct than
system, you're leaving growth on the table. That's where Brad Stave comes in. With 20+ years of
senior marketing leadership across global tech, private corporations, and nonprofits, Brad
brings the outside perspective, creative depth, and strategic discipline to help organizations
build compelling brands, communicate more clearly, reach the right people, and grow with
confidence."
CTA: "Connect with Brad"

Secondary BrandRise™ callout block repeats between sections (same offer, shorter copy) — treat
as a reusable promo component that appears 2–3 times down the page.

**Core Capabilities** (numbered 1–6, each links to its own `/services/...` page)
Section intro: "Systems that scale engagement, strengthen brand narratives, and deliver
measurable results."

1. Growth Marketing Strategy — "Do you have a clear, repeatable system for bringing in qualified
   customers — or is growth still largely unpredictable?" "Develop scalable, data-driven
   campaigns that drive measurable ROI, accelerate acquisition, and strengthen long-term
   engagement."
2. Brand Alignment & Storytelling — "Does everyone in your organization tell the same story about
   who you are and who you serve?" "Unify your message across platforms and audiences to build
   trust, clarity, and a compelling narrative that moves people to action."
3. Sales Enablement — "Does your sales team have the right messaging, tools, and confidence to
   close — consistently?" "Equip teams with the tools, messaging, and systems that accelerate
   performance and deepen customer relationships."
4. Lifecycle Marketing Systems — "Are you nurturing your audience after the first touch — or
   losing them before they're ready to buy?" "Architect automated, insight-driven journeys that
   nurture audiences from first touch to long-term loyalty."
5. Digital Acquisition & Growth — "Do you know exactly who your ideal customer is, where to find
   them, and what it takes to convert them?" "Use precision targeting, creative optimization, and
   integrated storytelling to expand reach and convert new audiences at scale."
6. Creative Design & Content Development — "Does your content and creative work reflect the
   actual quality of what you deliver?" "Craft compelling visuals, messaging, and content systems
   that bring your brand to life — from concept through execution — across every channel and
   audience."

Each card has a "Learn More" link to its dedicated service page (see section 6).

**Expanded Expertise** (8 items, no dedicated pages — just descriptive cards)
Section intro: "Comprehensive support to execute your strategy across every touchpoint." CTA:
"Discuss Your Needs"

- AI Integration & Optimization — "Embed AI tools and automation into your marketing workflows to
  improve speed, personalization, and scale — from content generation and audience segmentation
  to predictive analytics and intelligent campaign optimization."
- CRM Development — "Design and build the CRM infrastructure that supports your sales, marketing,
  and donor development teams — including pipeline architecture, contact segmentation,
  automation workflows, and the reporting dashboards that keep everyone aligned."
- Public Relations — "Shape the narrative around your organization through strategic media
  relations, thought leadership development, and executive positioning — building credibility
  and visibility with the audiences who matter most."
- Project Management — "Lead complex marketing initiatives from concept through delivery with
  clear timelines, stakeholder alignment, and cross-functional coordination — ensuring ambitious
  campaigns are executed on time and on brief."
- Strategic Direction — "Provide the senior marketing leadership that growing organizations need
  but can't always sustain full-time — from quarterly planning and budget prioritization to team
  coaching and board-level reporting."
- Social Media Development — "Build the platform strategy, content frameworks, publishing
  systems, and community management practices that grow engaged followings and turn social
  channels into meaningful business assets."
- SEO Optimization — "Improve organic search visibility through technical SEO audits, keyword
  strategy, content optimization, and GEO/AEO positioning — creating sustainable, compounding
  traffic that doesn't depend on paid spend."
- Acquisition Strategies — "Develop and execute multi-channel acquisition programs that
  systematically fill your funnel with qualified prospects — combining inbound content, paid
  media, partnerships, and direct outreach into a coordinated growth strategy."

**"Why Ascend Smartly with Us?"**
Intro: "Ascend Consulting isn't just about rising — it's about rising with intention, clarity, and
capability."
Body: "Most organizations don't have a messaging problem — they have a clarity problem. They
know what they do, but they struggle to communicate why it matters, present it in a way that
builds trust, or reach the right people through the right channels. The brand feels
inconsistent. The story keeps shifting. And without a structured approach to reaching and
converting their ideal audience, growth stays unpredictable. Ascend was built to solve exactly
that. You get a partner who brings two decades of global marketing leadership across tech,
corporate, and nonprofit sectors — someone who can step outside your organization, see it the
way your audience does, and build the strategy, messaging, and systems to close the gap between
where you are and where you should be."
Bullets:
- Your brand identity and message become consistent, compelling, and clear — across every
  channel and audience.
- You know exactly who you're targeting and have a proven strategy to reach them.
- Your acquisition approach is built on systems and data, not instinct and hope.
- You move forward with confidence, backed by senior-level expertise without the full-time
  overhead.

Closing line (styled as a standalone statement): "Strategic intelligence. Creative excellence.
Measurable growth. That's what it means to ascend — smartly."

**Resources teaser**: 5 cards linking to `/resources#partners`, `#case-studies`, `#portfolio`,
`#testimonials`, `#faq`, plus "All Resources" to `/resources`.

**Final CTA**: "Ready to take the next step?" — "Book a consultation to talk through your goals,
explore opportunities, and see how Ascend can support your organization's growth. It's a simple,
no-pressure conversation designed to give you clarity and momentum." CTA: "Schedule a Time
Today"

### BrandRise™ (`/brandrise`)

SEO title: "BrandRise™ Launch Packages | Ascend Consulting"

Hero: "Launch · Relaunch · Rise — BrandRise™." Subhead: "Your lift-off point — a complete system
that builds or relaunches the strategic, visual, verbal, and digital foundation your
organization needs to compete and grow." Tier price chips shown in hero: BrandRise Monthly
$250/mo, Bronze $3,500, Silver $7,500, Gold $16,500, Platinum starting at $33,500. CTA: "Choose
Your Tier"

**What is BrandRise™** section: "Built for organizations ready to rise above their competition."
"Whether you're starting fresh, evolving your identity, or reigniting momentum, BrandRise™ gives
you the clarity, cohesion, and infrastructure to move forward with confidence. It's a complete
suite of strategic, creative, and operational services designed to launch, refresh, or accelerate
any organization. Each offering stands alone — but together, they form a full business-launch
ecosystem. Five ways to launch. Transparent pricing. One clear path from where you are to where
you need to be — including a monthly option with zero upfront cost."

**How every engagement begins**: Every tier starts with a free exploratory call covering:
organization's short/long-term goals; current brand identity, tone, visual assets; existing
marketing channels/campaigns/messaging; ideal customer/constituent profile; competitive
landscape and market positioning; current digital presence (website, social, search); what
success looks like; timeline/milestones/launch targets; internal team structure and capacity;
budget parameters/constraints; brand equity worth preserving vs. reinventing; risks,
sensitivities, non-negotiables. "No commitment required."

**The five tiers** (each is a pricing card with a recurring "complimentary hot cup of coffee" and
"Ascend frisbee" joke line — keep this, it's a deliberate brand voice touch):

1. **BrandRise Monthly** — $250/mo, zero upfront, 2-year minimum. "A professional website without
   the big upfront investment." Includes: custom scrolling one-page website, professional
   branded email, hosting/backups/monitoring, Google Workspace suite, basic SEO, minor monthly
   updates, two seasonal refreshes/year, no upfront cost. Outcome: "A professional, fully hosted
   website and digital workspace — launched without upfront cost and maintained continuously as
   your business evolves." CTA: "Schedule to Discuss BrandRise Monthly"
2. **Bronze — BrandRise™ Essentials** — $3,500 one-time. Mini brand strategy, basic visual
   identity, light verbal identity, one-page scrolling website, basic SEO setup, target market ID
   + USP + go-to-market plan. Outcome: "A simple, professional brand presence that gets you into
   the market quickly and affordably."
3. **Silver — BrandRise™ Core** — $7,500 one-time. Everything in Bronze plus: expanded brand
   strategy (personas, competitive map), full visual identity system, verbal identity system,
   multi-page site (up to 5 pages), conversion-focused UX/wireframes, technical SEO audit, local
   SEO/GBP setup. Outcome: "A cohesive brand and website that communicate clearly, look
   polished, and support early growth."
4. **Gold — BrandRise™ Growth** ("Most Popular") — $16,500 one-time. Everything in Silver plus:
   full brand story/narrative, tagline development (3–5 options), social brand kit, presentation
   deck template, email signature system, content starter pack (3–5 SEO articles), expansive
   site (up to 10 pages), landing pages/funnel design, go-to-market strategy, 90-day content
   calendar, paid+organic promotion strategy. Outcome: "A fully equipped brand and marketing
   engine designed to drive awareness, engagement, and conversion."
5. **Platinum — BrandRise™ Complete** — starting at $33,500 one-time. Everything in Gold plus:
   full brand architecture/naming systems, comprehensive visual identity library, full verbal
   identity playbook, enterprise site (up to 25 pages), advanced SEO (schema, AEO/IEO), video +
   photography package, email marketing setup, retargeting strategy, influencer/partnership
   strategy, sales enablement materials, brand governance system, CRM integration, internal brand
   training, templates library, launch playbook. Outcome: "A complete, enterprise-grade brand and
   growth system — built to scale, differentiate, and dominate your category."

**Ongoing Care Plan** add-on/standalone — $100/month, 2-year minimum. Hosting, monthly updates,
two seasonal refreshes/year, basic SEO upkeep, professional email setup.

**What happens next** (3 steps): 1) Choose your path, 2) Book your free consultation, 3) Complete
the pre-call intake form (~15–20 min).

**The Work — eight service categories** every tier draws from (click-to-expand cards on the live
site): Brand Strategy & Positioning; Visual Identity System; Verbal Identity System; Website
Design, Development & Digital Experience; SEO, AEO/IEO & GEO Optimization; Go-to-Market Strategy;
Promotion, Advertising & Growth; Content Creation & Media Production.

Final CTA: "Which rise is right for you?" → "Schedule Your BrandRise™ Consultation." Includes a
secondary note directing already-booked visitors to a pre-call intake form.

### Industry Solutions (`/industry-solutions`)

SEO title: "Industry Marketing Solutions | Legal & Accounting/Finance | Ascend Consulting"

Note: this page has a "← Back to ProVisors" link and a ProVisors-specific closing offer (20% off
for ProVisors members/referrals) — it looks like a referral-partner landing page as well as a
general industry page. Confirm with Brad whether this needs to be split into a generic
`/industry-solutions` page and a separate ProVisors campaign landing page.

Hero: "Marketing built for your industry." Body: "Ascend Consulting delivers complete, end-to-end
marketing systems purpose-built for professional service firms — with deep expertise across the
legal and accounting/finance sectors. Every system includes brand, website, strategy, SEO, paid
advertising, and AI-powered lead capture."

**Two disciplines** section, each with a live demo link:
- **Legal industry**: brand identity & website, go-to-market strategy, SEO + AEO/IEO, content
  creation, Google Ads + Meta Ads, dedicated ad landing pages, 24/7 AI chat assistant. Live demo:
  law.ascendsmartly.com (fictitious "Washington Law" firm — 8 practice areas, attorney bios,
  results showcase, client insights, consultation booking flow).
- **Accounting & finance**: same list plus LinkedIn ads. Live demo: finance.ascendsmartly.com
  (fictitious "Washington Accounting & Financial Services" firm — accounting, tax planning,
  fractional CFO, wealth management, AI assistant, paid landing pages for 4 audience segments).

**Why it matters** section: "Generic marketing doesn't win professional service clients." Body
about high-trust, high-consideration markets and generic marketing not earning trust. Four value
props: Trust-first positioning; Search intent that converts; AI-powered 24/7 lead capture; Live
demos prove the work.

Closing CTA: "Ready to get started?" — ProVisors members/referrals get 20% off. "Schedule a Free
Consultation" / "Contact Brad."

### Exit-Ready Brand (`/exit-ready-brand`)

SEO title: "Exit-Ready Brand | M&A Brand & Marketing Readiness | Ascend Consulting"

Hero: "Your business is about to be judged by a stranger." Subhead: "Get it ready to sell for
what it's really worth, before the buyer starts asking questions." CTA: "Schedule a Readiness
Call"

**The problem**: "What a buyer sees before they see your financials." Body about buyers
discounting for inconsistent brand story, owner-dependent growth, no documented marketing
system, thin digital footprint — none of which shows on the P&L but all of which shows in the
offer.

**Three pillars of readiness**: Brand Clarity; Documented Systems; Digital Reputation (each with
a short description — see full copy captured in the crawl if rebuilding verbatim).

**Timing**: "Best started 6 to 18 months before you go to market" so work is finished, live, and
proven by the time the CIM goes to buyers.

**Packages** (quoted after a readiness conversation, not fixed pricing):
- **Audit** — outside-in readiness assessment: brand/visual identity audit, website/digital
  footprint review, lead-gen documentation gap analysis, prioritized readiness report.
- **Brand Refresh** — updated identity/collateral/website: refined visual identity, professional
  website redesign, updated collateral/messaging, positioning aligned with buyer expectations.
- **Full Readiness** ("Most common") — everything in Brand Refresh plus documented customer
  acquisition process, lead-gen systems map, marketing playbook for hand-off, diligence-ready
  presentation materials.
- **Ongoing Support** — responsive updates through diligence, consistent messaging guidance,
  materials updates, support through signing.

**Why Ascend**: Brad Stave bio (20+ years senior marketing leadership across Dell, HP, Lenovo,
Microsoft, World Vision, etc.), logos of organizations he's led marketing for.

Closing CTA: "Talk to Brad before you go to market." — 30-minute conversation.

### Real Estate Marketing (`/real-estate-marketing`)

SEO title: "Real Estate Marketing | Listing Photography, Video & Property Websites | Ascend
Consulting"

Hero: "Your Listing Has One Shot at a First Impression. Make It Count." Body: "Ascend Consulting
builds complete marketing systems for real estate listings — photography, video, 3D tours,
signage, and a dedicated property website — the same system Brad uses on his own listings as a
licensed Washington broker." CTAs: "Schedule a Consultation" / "See a Live Example"

**The problem**: "What buyers see before they ever request a showing" — generic listing photos
losing to buyers scrolling a dozen other listings.

**Three pillars**: Visual Storytelling (photography, video, twilight, Matterport 3D, floor
plans); On-Site Experience (yard signage, feature cards, listing one-pagers); Digital Presence
(dedicated property website + digital brochure).

**Who this is for**: Brad Stave is a licensed WA Real Estate Broker with The Medford Team Real
Estate Team at Keller Williams; built this system for his own listings, now offers it to any
agent regardless of brokerage.

**Portfolio examples** (real, linkable listing sites): agigharborview.com (Gig Harbor water view
home), wonderfulgigharbor.com (Artondale remodel), lakesamishhome.com (sold Bellingham
waterfront), thebigbuckranch.com (118-acre ranch, built for another agent).

**Packages**:
- **Essentials** — $950: professional photography, twilight images, video tour, listing
  one-pager.
- **Pro** — $1,950: Essentials plus Matterport 3D tour, floor plans, dedicated property website
  with unique URL.
- **Complete Marketing System** ("Most common") — $2,950: Pro plus custom yard signage, feature
  cards, social media posts, paid ad campaign for the listing (first two weeks, ad cost
  included), full digital brochure (property/neighborhood/community/city).

Real estate–specific contact block and broker license disclosure (see section 4) appears at the
bottom of this page only.

### Resources (`/resources`)

SEO/title reuses the homepage title in the crawl (likely a client-side routed page rather than a
fully distinct document — verify and give it its own title/meta when rebuilding: "Resources |
Ascend Consulting").

Intro: "Resources — Partners, real-world case studies, portfolio work, client testimonials, and
answers to common questions — everything you need to make a confident decision." In-page tab/nav:
Partners · Case Studies · Portfolio · Testimonials · FAQs

**Partners** (`#partners`)
Intro: "A Network Built for Your Needs" — vetted specialists Ascend brings in when needs extend
beyond marketing strategy.
Partner roster:
- Tyler Carey — Leadership Advisor, Trellis Leadership
- Samuel Ebat — Filmmaker & Creative Director, PIXELtechnics
- Ben Hamilton — Fractional CSO/CISO, PraeSyn
- Mike Nakamura — Photographer, Mike Nakamura Photography
- Alex Polamero — Chief Growth Officer, Ninestone Partners
- Mitch Roberts — Executive Coach & Facilitator, Aligned to Purpose
- Jay Russo — Owner & President, RB Printing
- Dr. Tom Tonkin — Fractional Sales & GTM Leader, The Tonkin Group

Two featured partnership callouts:
- **NineStone Partners** — extended bench (system architects, web designers, CRM experts, sales
  leaders, executive coaches) for enterprise-level challenges. Tags: System Architecture, Web
  Design, CRM & Technology, Sales Leadership, Executive Coaching, Org Transformation.
- **PraeSyn** (Ben Hamilton) — fractional CSO/CISO practice for growth-stage/PE-backed companies
  needing investor-ready security programs. Tags: Fractional CSO/CISO, SOC 2 & ISO 27001, CMMC
  Compliance, AI Security (ISO 42001), Investor-Ready Security, Board-Level Reporting, M&A Due
  Diligence.

**Case Studies** (`#case-studies`) — 7 cards, each "Read Case Study" (likely opens a detail
page/modal — confirm with Brad if these need individual routes):
1. Ashdon Golf — "Brand Rebuild, Digital Transformation, and Full Go-to-Market Launch." Tags:
   Brand Identity, UX/UI Design.
2. Sensient Technologies — "Building an ABM-Ready Marketing Team Through Custom B2B Masterclass
   Training." Tags: ABM Strategy, B2B Marketing.
3. Trail Life USA — "Aligning Sales, CRM & E-Commerce to Fuel Mission-Driven Growth" (delivered
   via Ninestone Partners through Ascend's partner network). Tags: Sales Architecture, CRM
   Strategy.
4. VisionFund International — "Unifying a Global Microfinance Network Under One Brand" (30+
   institutions under one identity). Tags: Brand Strategy, Global Marketing.
5. Water Mission — "Record-Breaking Q1 Growth Through Strategic Marketing Leadership." Tags:
   Lifecycle Marketing, Donor Engagement.
6. Water Mission (second case study) — "Driving Record Digital Acquisition Through Strategic,
   Multi-Channel Engagement." Tags: Digital Acquisition, Paid Media.
7. Zones, LLC — "Driving Double-Digit Growth Through Strategic IT Brand Leadership" (Dell, HP,
   Lenovo, Microsoft, Intel portfolios). Tags: Sales Enablement, Brand Leadership.

Featured video/story block: "Ascend in Action" — Ashdon Golf before/after narrative with "Watch
the Transformation" and a link to the live Ashdon Golf site.

**Portfolio** (`#portfolio`) — 11 project cards, each with a contribution bullet list and "Visit
Site" link:
1. **Ashdon Golf** (ashdongolf.com) — premium putters brand. Full brand identity, e-commerce
   site, creative/copy, SEO/GEO/AEO. Tags: Branding, Web Design, E-Commerce, SEO/GEO/AEO.
2. **Carteeo** (carteeo.com) — shopping-cart middleware concept. Full concept/business plan,
   brand identity, website, GTM strategy, SEO/GEO/AEO. Tags: Brand Development, Business
   Planning, GTM Strategy, Web Design.
3. **FuelTru** (fueltru.com) — driving-cost/EV-savings calculator web app. Concept/brand name/
   visual identity, built the web app, integrated third-party APIs (gas prices, EV data, dealer
   locations), copy, GTM strategy. Tags: Brand Development, Web App, GTM Strategy, UI/UX Design.
4. **Keller Williams — Lake Samish listing** (lakesamishhome.com) — Bellingham lakefront listing.
   Media/3D capture, listing copy, dedicated property site, GTM strategy, paid ads, social. Tags:
   Real Estate Marketing, Listing Strategy, 3D Tour, Paid Media, Social Media, SEO/GEO/AEO.
5. **Larson Electric** (larson-electric.com) — electrical services company. Color palette/brand
   system from existing logo, creative/copy/website, GTM strategy, SEO/GEO/AEO. Tags: Branding,
   Web Design, SEO/GEO/AEO.
6. **Real Estate Sleuth** (resleuth.com) — agent engagement platform. Marketing plan, brand
   identity/naming, creative/copy/website, GTM strategy, SEO/GEO/AEO. Tags: Brand & Naming,
   Marketing Strategy, Copy & Design, GTM Strategy.
7. **Rose's Landscaping Co** (staging2.ascendsmartly.com — note: staging URL, get production URL
   from Brad) — University Place, WA lawn care/landscaping. Brand identity/visual system,
   creative/copy/website, lead capture/free-quote UX, local GTM strategy, SEO/GEO/AEO. Tags:
   Branding, Web Design, Lead Generation, Local SEO.
8. **Washington Accounting & Financial Services** (finance.ascendsmartly.com) — demo CPA/finance
   firm site. Full brand identity, multi-page website, creative/copy, AI assistant, paid landing
   pages for 4 segments, SEO/GEO/AEO. Tags: Branding, Web Design, AI Assistant, Paid Media,
   SEO/GEO/AEO.
9. **Washington Law** (law.ascendsmartly.com) — demo boutique law firm site, 8 practice areas,
   attorney bios, results showcase, client insights, booking flow. Same tag set as above.
10. **The Wide Lens Podcast** (widelenspodcast.com) — Brad-hosted long-form interview podcast.
    Full production (concept → ongoing episodes), audio engineering, branding/format/show
    identity, hosting, website, promotion/social strategy. Tags: Podcast Production, Audio
    Engineering, Creative Development, Hosting, Web Design, Social Media.
11. **Water Mission** (watermission.org) — global faith-based nonprofit. UX/creative design,
    content copy, brand integration, SEO/GEO/AEO, paid ads, social strategy. Tags: UX & Creative
    Design, Content Copy, Brand Integration, SEO/GEO/AEO, Paid Media, Social Media.

**Testimonials** (`#testimonials`) — 4 quotes:
- Luke Wilson, Former Category Manager, Zones LLC — on strategic vision + executional precision
  driving record growth.
- Jon Snyder, Brand Specialist, VisionFund International — on unifying a fragmented global
  network into one brand story.
- Chuck Fultz, Marketing Director, Water Mission — on the most successful Q1 ever.
- Jonathan Fawcett, Marketing Manager, Water Mission — on the Hurricane Helene response campaign.

(Full quote text was captured in the crawl — pull verbatim from the live site or ask Brad for the
source doc rather than paraphrasing testimonials.)

**FAQs** (`#faq`) — accordion, questions only (answers are hidden until clicked, re-crawl with
each one expanded, or ask Brad for the source content):
What is Ascend Consulting? / Who is Brad Stave? / What services does Ascend Consulting offer? /
What is BrandRise™? / What does each BrandRise™ tier include? / How is BrandRise™ different from
Ascend's regular consulting services? / Does Ascend Consulting work with nonprofits? / Where is
Ascend Consulting based? / How do I work with Ascend Consulting? / What results has Ascend
delivered for clients? / What makes Ascend different from a traditional marketing agency? / What
brands and websites has Ascend built? / Does Ascend Consulting offer SEO, GEO, and AEO/IEO
optimization? / Does Ascend work with startups and new businesses? / Does Ascend offer podcast
production and audio engineering services? / Does Ascend Consulting offer B2B marketing and
Account-Based Marketing (ABM) training? / Can Ascend Consulting help align our CRM, sales
processes, and e-commerce systems? / What is The Wide Lens Podcast?

### Service pages (`/services/*`)

All six follow one identical template. Build this as a single dynamic Astro route
(`src/pages/services/[slug].astro`) driven by a content collection or data file, not six
hand-copied pages. Template sections, in order:

1. Numbered eyebrow ("CORE CAPABILITY" + number 1–6) + H1 (two-line service name) + one-sentence
   subhead + CTA button ("Let's Talk Growth" / "Let's Shape Your Story" / etc. — CTA label is
   unique per page)
2. "THE CONCEPT" — section eyebrow, a short punchy headline, 3 paragraphs of explanation, then a
   row of 4 stat callouts (number/label pairs, unique per service)
3. "THE WORK — What I deliver" — 8 numbered/titled deliverables, each with a 1–2 sentence
   description
4. "THE VALUE — What changes when..." — 6 before/after pairs (styled as "FROM (problem)" →
   "TO (outcome)")
5. "WHO IT'S FOR" — intro line + 4 audience/persona cards, each with a title and description
6. Closing CTA — "START THE CONVERSATION" eyebrow, headline, "Schedule a Conversation" +
   "Email Brad Directly" buttons, contact line

Full copy for all 6 services, captured verbatim from the live site:

**1. Growth Marketing Strategy** (`/services/growth-marketing-strategy`)
- Subhead: "Build marketing into a disciplined, scalable growth engine — not just campaigns, but
  the systems, frameworks, and data infrastructure that make every investment compound over
  time." CTA: "Let's Talk Growth"
- Concept headline: "Marketing isn't a campaign. It's an engine." Stats: 20+ years of growth
  marketing leadership / 3 sectors (nonprofit, tech, corporate) / 30+ country markets managed /
  Record Q1 donor revenue for Water Mission
- The Work: Full-Funnel Strategy Development; Audience Segmentation & ICP Definition; Campaign
  Architecture & Channel Mix; KPI Frameworks & Measurement Design; Go-to-Market Planning; Testing
  Roadmaps; Marketing Technology Stack Assessment; Executive Reporting & Strategic Insights
- The Value pairs: Fragmented tactics → Integrated, full-funnel strategy with clear ownership at
  every stage; Guesswork and gut feel → Measurable attribution tied to revenue, donor growth, or
  pipeline; One-off campaigns → Repeatable growth systems that compound results over time;
  Marketing as a cost center → Marketing as a measurable, scalable driver of organizational
  growth; Disconnected channels → A coherent channel mix where paid, organic, and CRM work in
  concert; Reporting that doesn't answer questions → Dashboards and insights that move strategy
  forward
- Who it's for: Nonprofits scaling beyond word-of-mouth; B2B companies entering new markets;
  Growth-stage businesses outgrowing ad hoc marketing; Organizations preparing for a major
  initiative

**2. Brand Alignment & Storytelling** (`/services/brand-alignment-storytelling`)
- Subhead: "Unify your message, clarify your identity, and craft the story that builds lasting
  trust and moves people — across every channel, audience, and medium." CTA: "Let's Shape Your
  Story"
- Concept headline: "Your story is either working for you or against you." Stats: 20+ years
  leading brand strategy across sectors / 30+ country markets unified under one brand / Global
  brand launches at VisionFund & Water Mission / Every channel: digital, print, events, and sales
- The Work: Brand Audit & Diagnosis; Core Messaging Architecture; Audience Narrative Mapping;
  Brand Voice & Tone Guide; Visual Identity Alignment; Cross-Channel Brand Governance; Campaign
  Narrative Development; Executive & Sales Messaging
- The Value pairs: Scattered messages across teams → One clear, unified voice across every
  channel and touchpoint; Generic, forgettable positioning → A differentiated story that only
  your organization can tell; Inconsistent visual identity → A cohesive brand system that builds
  recognition with every impression; Marketing and sales disconnected → Aligned narratives from
  first impression through close; Mission that doesn't convert → Story that moves donors, buyers,
  and partners to act; Brand fragmented across regions or teams → Governance system that scales
  consistency without bureaucracy
- Who it's for: Organizations going through a rebrand or repositioning; Nonprofits with a
  powerful mission that isn't connecting; B2B companies struggling to differentiate; Growing
  organizations with fragmented brand

**3. Sales Enablement** (`/services/sales-enablement`)
- Subhead: "Close the gap between marketing investment and revenue outcomes — equipping your
  team with the messaging, tools, and systems that turn conversations into closed deals." CTA:
  "Let's Equip Your Team"
- Concept headline: "Marketing generates interest. Enablement turns it into revenue." Stats:
  HubSpot CRM strategy and optimization expertise / B2B complex deal cycle experience / Major
  donor development for nonprofits / Full revenue team alignment (marketing → sales)
- The Work: Sales Messaging Framework; Buyer Journey Mapping; Sales Collateral Development; CRM
  Strategy & Optimization; Sales & Marketing Alignment; Onboarding & Training Materials; Proposal
  & RFP Templates; Revenue Metrics & Reporting
- The Value pairs: Marketing and sales working in silos → Aligned teams with shared goals, shared
  language, and clear handoffs; Long, inefficient deal cycles → Faster conversions with the right
  tools and messaging at every stage; Inconsistent rep messaging → Every team member telling the
  same confident, differentiated story; CRM no one actually uses → A pipeline your team trusts and
  leadership can actually forecast from; New hires taking months to ramp → Scalable onboarding
  that gets reps productive faster; Gut-feel sales coaching → Data-driven performance reviews tied
  to clear activity metrics
- Who it's for: Sales teams that have outgrown ad hoc processes; Companies launching new products
  or entering new markets; Nonprofits with major donor development programs; B2B organizations
  scaling their sales organization

**4. Lifecycle Marketing Systems** (`/services/lifecycle-marketing-systems`)
- Subhead: "Build the automated, insight-driven journeys that turn first touches into lasting
  relationships — and lasting relationships into sustainable growth." CTA: "Let's Build Your
  Lifecycle"
- Concept headline: "Acquisition is a beginning. The relationship is the business." Stats: Record
  Q1 donor revenue through lifecycle reactivation / 30+ country programs unified in lifecycle
  strategy / Email architecture from welcome to win-back / Always-on journeys that work around
  the clock
- The Work: Lifecycle Stage Mapping; Onboarding Journey Design; Retention & Nurture Campaigns;
  Reactivation Programs; Loyalty & Advocacy Systems; Segmentation Strategy; Email Marketing
  Architecture; Testing & Optimization Roadmap
- The Value pairs: Acquisition-only thinking → Full lifecycle strategy with equal investment in
  retention and growth; One-size-fits-all communications → Personalized journeys based on
  behavior, stage, and declared interests; Lapsed audiences written off → Systematic reactivation
  that recovers meaningful revenue and relationships; Email program that feels like spam →
  High-deliverability, behavior-triggered communications audiences actually want; Unknown churn
  drivers → Clear stage data that surfaces where relationships are breaking down; Manual, one-off
  campaigns → Automated, always-on journeys that work while your team sleeps
- Who it's for: Organizations with strong acquisition but high churn; Nonprofits focused on donor
  retention and lifetime value; B2B companies with long customer relationships to nurture;
  Subscription or membership businesses building loyalty

**5. Digital Acquisition & Growth** (`/services/digital-acquisition-growth`)
- Subhead: "Find, attract, and convert new audiences at scale — with the right channel mix,
  creative strategy, and measurement infrastructure that makes every dollar compound." CTA:
  "Let's Grow Your Reach"
- Concept headline: "Digital growth isn't about spending more. It's about spending smarter."
  Stats: Multi-channel (paid, organic, social, content, email) / B2B & nonprofit digital
  acquisition expertise / SEO, GEO, AEO and IEO optimization strategy / Data attribution from
  first touch to conversion
- The Work: Digital Channel Strategy; Paid Media Planning & Optimization; SEO & Content Strategy;
  Landing Page & Conversion Optimization; Lead Generation Programs; Social Media Strategy;
  Analytics & Attribution; Growth Experimentation Framework
- The Value pairs: Spray and pray spending → Precision targeting with clear ROI and
  cost-per-acquisition benchmarks; Organic traffic guesswork → SEO strategy tied directly to
  business goals and search intent; Traffic that doesn't convert → Optimized conversion paths
  that turn visits into pipeline; Channel-by-channel thinking → Integrated acquisition system
  where channels amplify each other; Reporting that doesn't answer "why" → Attribution model that
  shows where revenue is actually coming from; One-time campaigns → Scalable growth programs
  that compound returns over time
- Who it's for: Organizations entering digital acquisition for the first time; Brands looking to
  scale proven digital programs; Nonprofits building digital donor acquisition; B2B companies
  with underperforming digital presence

**6. Creative Design & Content Development** (`/services/creative-design-content-development`)
- Subhead: "Bring your brand to life with creative that doesn't just look good — it communicates
  the right message to the right person in a way that moves them." CTA: "Let's Create Together"
- Concept headline: "Creative isn't decoration. It's strategy made visible." Stats: 20+ years of
  brand and campaign creative leadership / Global campaigns across 30+ country markets / Every
  format: digital, print, video, events, and more / Strategy first — every creative decision earns
  its place
- The Work: Creative Strategy & Concepting; Visual Identity & Brand Design; Content Strategy &
  Calendar; Campaign Creative Development; Copywriting & Editorial; Presentation & Sales Deck
  Design; Digital Asset Production; Photography & Video Direction
- The Value pairs: Beautiful but strategically disconnected creative → Design and content that
  serves a clear goal and moves people to act; Ad hoc content with no system → A disciplined
  content engine with cadence, accountability, and compounding reach; Off-brand visuals across
  channels → Consistent design language that builds recognition with every impression;
  Presentations that don't land → Decks that communicate your story with clarity and confidence;
  Generic stock photography → Authentic visual content that reflects your brand's real identity;
  Creative that lives in a vacuum → Assets built for the specific channel, audience, and goal
  they serve
- Who it's for: Organizations preparing for a major launch or campaign; Brands going through a
  rebrand or visual refresh; Teams without dedicated in-house creative capacity; Organizations
  needing executive-level content

### Terms & Conditions (`/terms-and-conditions`)

Standard consulting services agreement (services, compensation/ACH billing terms, work-product
ownership, confidentiality, warranties, term/termination with auto-renewal, independent
contractor relationship, limitation of liability, assignment, notices, force majeure, publicity,
non-solicitation with a $45,000 liquidated-damages clause for poaching Ascend team members,
general provisions under California law). Revision date on the live site: June 30, 2026.

This is legal boilerplate specific to Brad's consulting contracts, not marketing copy — pull the
exact current text directly from the live page (or have Brad supply the source doc) rather than
paraphrasing it, since the precise legal language matters here.

## 6. What to ask Brad before/while building

- What's powering the "Ava" chat widget today, and does he want it ported, rebuilt, or dropped
  for launch?
- Does the intake form / tier-selection buttons need to submit somewhere (CRM, email, HubSpot)?
- Is `/industry-solutions` meant to be a general page, a ProVisors-specific landing page, or
  both?
- Should the 7 case studies and the FAQ answers get their own pages/expanded content, or stay as
  teaser cards linking out?
- Confirm production URL for the Rose's Landscaping Co portfolio entry (currently pointing at a
  staging URL).
- Source files for logos (Dell, HP, Lenovo, etc.), the hero photo, and Brad's headshot — pull
  these from the current Replit project's asset folder rather than re-downloading from the live
  site at low resolution.

## 7. Build approach

1. Scaffold the Astro project, add Tailwind, set up base layout with the shared nav/footer/theme
   color from section 3–4.
2. Build the service-page template as a data-driven collection first (section 5) — it's the
   highest-leverage piece since 6 of the ~13 pages share one layout.
3. Build Home, BrandRise, Resources next (highest traffic/conversion pages).
4. Build Industry Solutions, Exit-Ready Brand, Real Estate Marketing.
5. Port Terms & Conditions verbatim.
6. Wire up the booking CTA (calendar.app.google link) sitewide, then handle forms/chat widget
   last once Brad has answered the open questions in section 6.
