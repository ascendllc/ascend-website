import Beasties from "beasties";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

async function walkHtmlFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const full = join(dir, entry.name);
			if (entry.isDirectory()) return walkHtmlFiles(full);
			return entry.name.endsWith(".html") ? [full] : [];
		})
	);
	return files.flat();
}

/**
 * Inlines each page's actually-used CSS directly into its HTML (avoiding the
 * render-blocking request for the site's full, shared Tailwind bundle) and
 * lazy-loads the full stylesheet in the background via preload+swap, so
 * repeat navigations still benefit from the browser cache.
 */
export default function criticalCss() {
	return {
		name: "critical-css",
		hooks: {
			"astro:build:done": async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);
				const beasties = new Beasties({
					path: outDir,
					preload: "swap",
					compress: true,
					pruneSource: false,
					logLevel: "silent",
				});

				const files = await walkHtmlFiles(outDir);
				let ok = 0;
				for (const file of files) {
					const html = await readFile(file, "utf-8");
					try {
						const result = await beasties.process(html);
						await writeFile(file, result, "utf-8");
						ok++;
					} catch (err) {
						logger.warn(`critical-css: skipped ${file}: ${err instanceof Error ? err.message : err}`);
					}
				}
				logger.info(`critical-css: inlined critical CSS for ${ok}/${files.length} pages`);
			},
		},
	};
}
