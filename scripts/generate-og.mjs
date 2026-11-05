// Generates a 1200x630 social-sharing (Open Graph) image for every indexable page of the built
// site, using the page's own <title>. Run after `npm run build`, then commit public/images/og:
//   npm run build && node scripts/generate-og.mjs && npm run build
// Layout.astro picks up public/images/og/<page-key>.jpg automatically when it exists.
import { readdirSync, readFileSync, statSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dist = "dist/client";
const out = "public/images/og";
mkdirSync(out, { recursive: true });

const walk = (dir) =>
	readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : p.endsWith("index.html") ? [p] : [];
	});

const esc = (s) => s.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&/g, "&amp;").replace(/</g, "&lt;");
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"');

function wrap(text, max) {
	const lines = [];
	let line = "";
	for (const word of text.split(/\s+/)) {
		if ((line + " " + word).trim().length > max && line) {
			lines.push(line);
			line = word;
		} else line = (line + " " + word).trim();
	}
	if (line) lines.push(line);
	return lines;
}

const logo = await sharp("public/images/ascend-logo-white.webp").resize({ height: 54 }).png().toBuffer();
let count = 0;

for (const file of walk(dist)) {
	const html = readFileSync(file, "utf8");
	if (/<meta name="robots" content="noindex/.test(html)) continue;
	const route = "/" + file.slice(dist.length + 1).replace(/index\.html$/, "");
	const key = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "-");
	if (key === "home") continue; // the homepage keeps the hand-made share image
	const title = decode((html.match(/<title>(.*?)<\/title>/s) ?? [])[1] ?? "").replace(/\s*\|\s*Ascend Consulting.*$/, "");
	const kind = route.startsWith("/insights/") ? "INSIGHTS" : route.startsWith("/case-study/") ? "CASE STUDY" : route.startsWith("/services/") ? "SERVICES" : "ASCEND CONSULTING";

	const size = title.length > 70 ? 50 : title.length > 45 ? 58 : 68;
	const lines = wrap(title, Math.floor(1020 / (size * 0.52))).slice(0, 4);
	const lineHeight = size * 1.22;
	const startY = 330 - ((lines.length - 1) * lineHeight) / 2;
	const text = lines.map((l, i) => `<text x="90" y="${startY + i * lineHeight}" font-size="${size}" font-weight="700" fill="#ffffff">${esc(l)}</text>`).join("");
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
		<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b2870"/><stop offset="1" stop-color="#131c52"/></linearGradient></defs>
		<rect width="1200" height="630" fill="url(#g)"/>
		<circle cx="1120" cy="80" r="260" fill="#3b4fb0" opacity="0.18"/>
		<circle cx="1040" cy="640" r="200" fill="#d1390a" opacity="0.14"/>
		<text x="90" y="${startY - size - 14}" font-size="24" font-weight="700" letter-spacing="4" fill="#fb923c">${kind}</text>
		${text}
		<text x="90" y="580" font-size="26" fill="#ffffff" opacity="0.7">ascendsmartly.com</text>
		<rect y="618" width="1200" height="12" fill="#d1390a"/>
	</svg>`;
	await sharp(Buffer.from(svg)).composite([{ input: logo, left: 90, top: 70 }]).jpeg({ quality: 82, mozjpeg: true }).toFile(join(out, `${key}.jpg`));
	count++;
}
console.log(`Generated ${count} share images in ${out}`);
