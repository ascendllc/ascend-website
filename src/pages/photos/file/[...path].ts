import type { APIRoute } from "astro";
import { get } from "@vercel/blob";
import { getGallery, photoNumbers } from "../../../data/photo-galleries";

export const prerender = false;

// The photos live in a private Blob store, so this is the only way to reach the files.
// It sits under /photos, so the password gate in src/middleware.ts protects it.
//   /photos/file/<gallery>/<full|thumb|original>/NN.jpg
//   /photos/file/<gallery>/zip
// Add ?download=1 to get a "save as" download instead of showing the file in the browser.
export const GET: APIRoute = async ({ params, request, url }) => {
	const parts = (params.path ?? "").split("/");
	const gallery = getGallery(parts[0]);
	if (!gallery) return new Response("Not found", { status: 404 });

	let blobPath: string;
	let contentType = "image/jpeg";
	let downloadName: string;

	if (parts.length === 2 && parts[1] === "zip") {
		blobPath = `${gallery.blobPrefix}/${gallery.zipName}`;
		contentType = "application/zip";
		downloadName = gallery.zipName;
	} else if (parts.length === 3 && ["full", "thumb", "original"].includes(parts[1])) {
		const n = /^(\d{2})\.jpg$/.exec(parts[2])?.[1];
		if (!n || !photoNumbers(gallery).includes(n)) return new Response("Not found", { status: 404 });
		const name = parts[1] === "original" ? `${gallery.filePrefix}-${n}.jpg` : `${n}.jpg`;
		blobPath = `${gallery.blobPrefix}/${parts[1]}/${name}`;
		downloadName = `${gallery.filePrefix}-${n}.jpg`;
	} else {
		return new Response("Not found", { status: 404 });
	}

	try {
		const result = await get(blobPath, {
			access: "private",
			ifNoneMatch: request.headers.get("if-none-match") ?? undefined,
		});
		if (!result) return new Response("Not found", { status: 404 });

		const headers: Record<string, string> = {
			"Content-Type": contentType,
			"Cache-Control": "private, max-age=86400",
			"X-Content-Type-Options": "nosniff",
			"X-Robots-Tag": "noindex, nofollow",
			ETag: result.blob.etag,
		};
		if (url.searchParams.has("download")) headers["Content-Disposition"] = `attachment; filename="${downloadName}"`;
		if (result.statusCode === 304) return new Response(null, { status: 304, headers });
		if (typeof result.blob.size === "number") headers["Content-Length"] = String(result.blob.size);
		return new Response(result.stream, { headers });
	} catch (error) {
		console.error("[photos] could not read file:", error);
		return new Response("Not found", { status: 404 });
	}
};
