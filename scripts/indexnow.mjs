// Tells IndexNow-enabled search engines (Bing, Yandex, Seznam, Naver and others, which also feed
// several AI assistants' web search) that pages changed, so new or updated URLs are crawled in
// minutes instead of days. Run after a deploy:  node scripts/indexnow.mjs
// It submits every URL in the live sitemap. The key file lives at /3fc357871bf150f24e49accbfd8d5807.txt.
const host = "www.ascendsmartly.com";
const key = "3fc357871bf150f24e49accbfd8d5807";

const index = await (await fetch(`https://${host}/sitemap-index.xml`)).text();
const maps = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const urlList = [];
for (const m of maps) {
	const xml = await (await fetch(m)).text();
	urlList.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((x) => x[1]));
}
const res = await fetch("https://api.indexnow.org/indexnow", {
	method: "POST",
	headers: { "Content-Type": "application/json; charset=utf-8" },
	body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, response ${res.status}`);
