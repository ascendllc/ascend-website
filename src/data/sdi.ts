import { existsSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, relative } from "node:path";
import thumbDims from "./sdi-thumbs.json";

/** Public URL prefix the launch package is served from. Mirrors the package's own folder structure. */
export const SDI_BASE = "/downloads/sdi";

export interface SdiFile {
	/** Path inside the package, e.g. "01-Flyer/SDI_Flyer_Front.png". */
	file: string;
	title: string;
	note?: string;
	/** Short spec line, e.g. "PDF · 2 pages · 8.5 × 11 in". */
	spec: string;
	/** When set, the primary button opens this shared link instead of downloading the file (the file stays available as a secondary download). */
	external?: { url: string; label: string };
}

export interface SdiGroup {
	id: string;
	/** Folder name exactly as it appears in the package. */
	folder: string;
	/** Short label shown in the badge ("01", "Start"). */
	badge: string;
	title: string;
	description: string;
	columns: 1 | 2 | 3 | 4;
	files: SdiFile[];
}

export const sdiBundleFile = "SDI_Love-Yourself-Now_Launch-Package.zip";

/** Shared Google versions of the two planning documents. */
export const sdiLinks = {
	playbook:
		"https://docs.google.com/document/d/1UtdgTFFKhJ1yV75E87duxQJWhM6KsDq4/edit?usp=sharing&ouid=105426094942221743554&rtpof=true&sd=true",
	workbook:
		"https://docs.google.com/spreadsheets/d/1sY0NVClNtRBDamnFTbHpLRmpbZYPjBHH/edit?usp=sharing&ouid=105426094942221743554&rtpof=true&sd=true",
};

export const sdiGroups: SdiGroup[] = [
	{
		id: "start-here",
		folder: "Main folder",
		badge: "Start",
		title: "Planning documents",
		description:
			"Start here. These two documents run the launch: the Playbook explains what to do and say, and the Outreach Workbook lists where to do it, with a dated checklist.",
		columns: 1,
		files: [
			{
				file: "SDI_Love-Yourself-Now_Launch-Playbook.docx",
				title: "Launch Playbook",
				note: "Strategy, messaging, wording rules, scripts, the posting calendar and a checklist to review before printing. Read this first.",
				spec: "Google Doc · opens in a new tab",
				external: { url: sdiLinks.playbook, label: "Open in Google Docs" },
			},
			{
				file: "SDI_Outreach_Workbook.xlsx",
				title: "Outreach Workbook",
				note: "52 places to visit, 55 online channels, 27 listing sites and a dated launch calendar.",
				spec: "Google Sheet · 6 tabs · opens in a new tab",
				external: { url: sdiLinks.workbook, label: "Open in Google Sheets" },
			},
		],
	},
	{
		id: "flyer",
		folder: "01-Flyer",
		badge: "01",
		title: "Flyer",
		description:
			"Your main handout, redesigned front and back. Print it at 8.5 × 11, hand it out or email it. The PDFs are letter size with no bleed, so any print shop can run them as is.",
		columns: 3,
		files: [
			{
				file: "01-Flyer/SDI_Flyer_2-Page_Print.pdf",
				title: "Flyer, 2-page print PDF",
				note: "Front and back in one file, ready for the print shop.",
				spec: "PDF · 2 pages · 8.5 × 11 in",
			},
			{ file: "01-Flyer/SDI_Flyer_Front.png", title: "Flyer, front", note: "An image of the front, for email or sharing on screen.", spec: "PNG · 2550 × 3300 px" },
			{ file: "01-Flyer/SDI_Flyer_Back.png", title: "Flyer, back", note: "An image of the back, for email or sharing on screen.", spec: "PNG · 2550 × 3300 px" },
		],
	},
	{
		id: "print-leave-behinds",
		folder: "02-Print-Leave-Behinds",
		badge: "02",
		title: "Print leave-behinds",
		description: "Small pieces to leave behind at counters, front desks and community boards. After printing the poster, cut the tear-off tabs apart.",
		columns: 3,
		files: [
			{
				file: "02-Print-Leave-Behinds/SDI_Rack_Card_4x9_Front-Back.pdf",
				title: "Rack card, 4 × 9 print PDF",
				note: "Front and back. For leaving at counters and front desks.",
				spec: "PDF · 2 pages · 4 × 9 in",
			},
			{ file: "02-Print-Leave-Behinds/SDI_Rack_Card_Front.png", title: "Rack card, front", spec: "PNG · 1200 × 2700 px" },
			{ file: "02-Print-Leave-Behinds/SDI_Rack_Card_Back.png", title: "Rack card, back", spec: "PNG · 1200 × 2700 px" },
			{
				file: "02-Print-Leave-Behinds/SDI_Bulletin_Poster_8.5x11.pdf",
				title: "Bulletin poster, print PDF",
				note: "With tear-off tabs. For cafes, studios, libraries and community boards.",
				spec: "PDF · 1 page · 8.5 × 11 in",
			},
			{ file: "02-Print-Leave-Behinds/SDI_Bulletin_Poster_8.5x11.png", title: "Bulletin poster, image", spec: "PNG · 3000 × 3882 px" },
		],
	},
	{
		id: "website-banners",
		folder: "03-Website-Banners",
		badge: "03",
		title: "Website banners",
		description: "These go at the very top of your homepage, above the registration form, with a button that scrolls down to it.",
		columns: 2,
		files: [
			{ file: "03-Website-Banners/SDI_Website_Hero_Desktop_1920x640.png", title: "Website banner, desktop", spec: "PNG · 1920 × 640 px" },
			{ file: "03-Website-Banners/SDI_Website_Hero_Mobile_800x1100.png", title: "Website banner, mobile", spec: "PNG · 800 × 1100 px" },
		],
	},
	{
		id: "social-graphics",
		folder: "04-Social-Graphics",
		badge: "04",
		title: "Social graphics",
		description: "Everything for the posting calendar in section 6 of the Playbook, plus your Facebook Event cover and a link-share image.",
		columns: 4,
		files: [
			{
				file: "04-Social-Graphics/SDI_Facebook_Event_Cover_1920x1005.png",
				title: "Facebook Event cover",
				note: "Also works as the cover for your Facebook page.",
				spec: "PNG · 1920 × 1005 px",
			},
			{
				file: "04-Social-Graphics/SDI_LinkedIn_LinkShare_1200x630.png",
				title: "LinkedIn link-share image",
				note: "The preview image shown when the event link is shared.",
				spec: "PNG · 1200 × 630 px",
			},
			{ file: "04-Social-Graphics/SDI_Post1_Hook_1080x1080.png", title: "Post 1: Hook", note: "Square feed post.", spec: "PNG · 1080 × 1080 px" },
			{ file: "04-Social-Graphics/SDI_Post2_Hook_1080x1080.png", title: "Post 2: Hook", note: "Square feed post.", spec: "PNG · 1080 × 1080 px" },
			{ file: "04-Social-Graphics/SDI_Post3_Details_1080x1080.png", title: "Post 3: Details", note: "Square feed post.", spec: "PNG · 1080 × 1080 px" },
			{ file: "04-Social-Graphics/SDI_Post4_Guides_1080x1080.png", title: "Post 4: Guides", note: "Square feed post.", spec: "PNG · 1080 × 1080 px" },
			{ file: "04-Social-Graphics/SDI_Story1_Hook_1080x1920.png", title: "Story 1: Hook", note: "Vertical story.", spec: "PNG · 1080 × 1920 px" },
			{ file: "04-Social-Graphics/SDI_Story2_EarlyBird_1080x1920.png", title: "Story 2: Early bird", note: "Vertical story.", spec: "PNG · 1080 × 1920 px" },
		],
	},
	{
		id: "brand-assets",
		folder: "05-Brand-Assets",
		badge: "05",
		title: "Brand assets",
		description:
			"The pieces the designs are built from, ready to reuse so future materials match. Each QR code opens soaringdragonflyinstitute.com with a source tag, so you can see which piece sent each visitor.",
		columns: 4,
		files: [
			{ file: "05-Brand-Assets/dragonfly.png", title: "Dragonfly mark", note: "Blue and green version, transparent background.", spec: "PNG · 400 × 400 px" },
			{ file: "05-Brand-Assets/camella.png", title: "Portrait: Camella McBrayer", spec: "PNG · 432 × 432 px" },
			{ file: "05-Brand-Assets/imeko.png", title: "Portrait: Imeko Woods", spec: "PNG · 432 × 432 px" },
			{ file: "05-Brand-Assets/vonna.png", title: "Portrait: Von-Na Chism", spec: "PNG · 432 × 432 px" },
			{ file: "05-Brand-Assets/qr_flyer.png", title: "QR code: flyer", note: "Source tag: flyer.", spec: "PNG · 1020 × 1020 px" },
			{ file: "05-Brand-Assets/qr_rack.png", title: "QR code: rack card", note: "Source tag: rack.", spec: "PNG · 1020 × 1020 px" },
			{ file: "05-Brand-Assets/qr_poster.png", title: "QR code: poster", note: "Source tag: poster.", spec: "PNG · 1020 × 1020 px" },
			{ file: "05-Brand-Assets/qr_web.png", title: "QR code: web", note: "Source tag: web.", spec: "PNG · 1020 × 1020 px" },
			{ file: "05-Brand-Assets/qr_social.png", title: "QR code: social", note: "Source tag: social.", spec: "PNG · 1020 × 1020 px" },
			{ file: "05-Brand-Assets/qr_card.png", title: "QR code: card", note: "Source tag: card.", spec: "PNG · 1020 × 1020 px" },
		],
	},
	{
		id: "source-files",
		folder: "06-Source-Files",
		badge: "06",
		title: "Source files",
		description:
			"The editable files behind every piece. If the date, price or venue changes, update every piece together so nothing goes out with mixed information.",
		columns: 1,
		files: [
			{
				file: "06-Source-Files/SDI_Source_Files.zip",
				title: "Editable source files",
				note: "HTML layouts, build scripts, fonts and artwork for every piece.",
				spec: "ZIP archive",
			},
		],
	},
];

export function formatBytes(bytes: number): string {
	if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(bytes >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
	return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

const slugOf = (file: string) =>
	basename(file)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

const root = join(process.cwd(), "public");

export interface SdiResolvedFile extends SdiFile {
	url: string;
	filename: string;
	ext: string;
	bytes: number;
	size: string;
	thumb: { src: string; w: number; h: number } | null;
}

/** Adds the URL, real on-disk size and thumbnail (if one exists) to a manifest entry. */
export function resolveFile(f: SdiFile): SdiResolvedFile {
	// statSync throws if the file is missing, so a broken link fails the build instead of shipping.
	const bytes = statSync(join(root, SDI_BASE, f.file)).size;
	const slug = slugOf(f.file);
	const dims = (thumbDims as Record<string, { w: number; h: number }>)[slug];
	const hasThumb = dims && existsSync(join(root, "images", "sdi", "thumbs", `${slug}.webp`));
	return {
		...f,
		url: `${SDI_BASE}/${f.file}`,
		filename: basename(f.file),
		ext: extname(f.file).slice(1).toUpperCase(),
		bytes,
		size: formatBytes(bytes),
		thumb: hasThumb ? { src: `/images/sdi/thumbs/${slug}.webp`, w: dims.w, h: dims.h } : null,
	};
}

/**
 * Fails the build if any file in the package folder is not listed above (or the reverse), so a
 * file added to /public/downloads/sdi can never be silently left off the page.
 */
function assertManifestComplete() {
	const base = join(root, SDI_BASE);
	const onDisk: string[] = [];
	const walk = (dir: string) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const full = join(dir, entry.name);
			if (entry.isDirectory()) walk(full);
			else if (entry.name !== ".DS_Store") onDisk.push(relative(base, full).split("\\").join("/"));
		}
	};
	walk(base);
	const listed = new Set([...sdiGroups.flatMap((g) => g.files.map((f) => f.file)), sdiBundleFile]);
	const unlisted = onDisk.filter((f) => !listed.has(f));
	const missing = [...listed].filter((f) => !onDisk.includes(f));
	if (unlisted.length || missing.length) {
		throw new Error(`SDI download manifest is out of sync. Not on the page: [${unlisted.join(", ")}]. Missing on disk: [${missing.join(", ")}].`);
	}
}
assertManifestComplete();
