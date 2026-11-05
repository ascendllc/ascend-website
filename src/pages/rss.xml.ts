import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site, canonicalUrl } from "../data/site";
import { insights } from "../data/insights";

export const GET: APIRoute = (context) =>
	rss({
		title: `${site.name} Insights`,
		description: "Guides and explainers on brand strategy, growth marketing, and modern search (SEO, GEO, and AEO) from Ascend Consulting.",
		site: context.site ?? site.url,
		items: insights.map((i) => ({
			title: i.title,
			description: i.metaDescription,
			pubDate: new Date(i.publishedDate),
			link: canonicalUrl(`/insights/${i.slug}`),
			author: `${site.email} (Brad Stave)`,
		})),
		customData: "<language>en-us</language>",
	});
