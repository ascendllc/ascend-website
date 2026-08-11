export const site = {
	name: "Ascend Consulting",
	booking: "https://calendar.app.google/fc6onovGBHBH9RWn9",
	email: "brad@ascendsmartly.com",
	phone: "+1.253.486.2452",
	phoneDisplay: "253.486.2452",
	location: "Tacoma, WA",
	domain: "ascendsmartly.com",
	themeColor: "#1B2870",
};

export const trustLogoImages = [
	{ name: "Dell", src: "/images/logo-dell.webp" },
	{ name: "HP", src: "/images/logo-hp.webp" },
	{ name: "Lenovo", src: "/images/logo-lenovo.webp" },
	{ name: "Microsoft", src: "/images/logo-microsoft.webp" },
	{ name: "World Vision", src: "/images/logo-worldvision.webp" },
	{ name: "Zones", src: "/images/logo-zones.webp" },
	{ name: "Trail Life USA", src: "/images/logo-traillife.webp" },
	{ name: "Water Mission", src: "/images/logo-watermission.webp" },
	{ name: "Sensient", src: "/images/logo-sensient.webp" },
	{ name: "Keller Williams", src: "/images/logo-kellerwilliams.webp" },
];

export const realEstateContact = {
	phone: "253.486.2452",
	email: "brad@pugetsoundlife.com",
	site: "pugetsoundlife.com",
	address: "7525 28th St W, University Place, WA 98466",
	license: "WA Real Estate Broker License #25024602",
	brokerage: "The Medford Team Real Estate Team, Keller Williams Realty",
};

export const trustLogos = [
	"Dell",
	"HP",
	"Lenovo",
	"Microsoft",
	"World Vision",
	"Zones",
	"Trail Life USA",
	"Water Mission",
	"Sensient",
	"Keller Williams",
];

// `scrollTo` mirrors the live site: these nav items smooth-scroll to a homepage
// section id rather than navigating. Dropdown children are real links.
export const mainNav = [
	{ label: "About", scrollTo: "about" },
	{
		label: "Solutions",
		scrollTo: "services",
		children: [
			{ label: "BrandRise™", href: "/brandrise", description: "Full brand launch packages" },
			{ label: "Industry Solutions", href: "/industry", description: "Finance & legal marketing" },
			{ label: "Exit-Ready Brand", href: "/exit-ready-brand", description: "M&A brand readiness" },
			{ label: "Real Estate Marketing", href: "/real-estate-marketing", description: "Listing marketing systems" },
			{ label: "All Solutions →", scrollTo: "services" },
		],
	},
	{ label: "Why Ascend", scrollTo: "why-us" },
	{
		label: "Resources",
		scrollTo: "resources",
		children: [
			{ label: "Partners", href: "/resources#partners" },
			{ label: "Case Studies", href: "/resources#case-studies" },
			{ label: "Portfolio", href: "/resources#portfolio" },
			{ label: "Testimonials", href: "/resources#testimonials" },
			{ label: "FAQs", href: "/resources#faq" },
			{ label: "All Resources →", href: "/resources" },
		],
	},
	{ label: "Contact", scrollTo: "contact" },
];
