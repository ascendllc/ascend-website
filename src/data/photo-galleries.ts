// Private photo galleries served from the password-protected /photos area.
// The image files themselves live in a PRIVATE Vercel Blob store (never in this public repo);
// this file only describes them. To add a gallery: upload `full/NN.jpg` (viewing copies),
// `thumb/NN.jpg`, `original/<filePrefix>-NN.jpg` and the zip under `blobPrefix` in the store,
// then add an entry here.

export interface Gallery {
	slug: string;
	title: string;
	dateLabel: string;
	description: string;
	/** Number of photos; files are numbered 01..count. */
	count: number;
	/** Folder inside the private Blob store. */
	blobPrefix: string;
	/** Filename prefix of the full-resolution originals, also used for download names. */
	filePrefix: string;
	zipName: string;
	zipBytes: number;
}

export const galleries: Gallery[] = [
	{
		slug: "stadium-dance-2026-10",
		title: "Stadium Dance Photos - October 2026",
		dateLabel: "October 2026",
		description: "Photos from the stadium dance performance, October 2026.",
		count: 20,
		blobPrefix: "galleries/stadium-dance-2026-10",
		filePrefix: "Stadium-Dance-Oct-2026",
		zipName: "Stadium-Dance-Photos-October-2026.zip",
		zipBytes: 119033513,
	},
];

export function getGallery(slug: string | undefined) {
	return galleries.find((g) => g.slug === slug);
}

export const pad = (n: number) => String(n).padStart(2, "0");

export function photoNumbers(g: Gallery) {
	return Array.from({ length: g.count }, (_, i) => pad(i + 1));
}

export const fileUrl = (g: Gallery, kind: "full" | "thumb" | "original", n: string) => `/photos/file/${g.slug}/${kind}/${n}.jpg`;
export const zipUrl = (g: Gallery) => `/photos/file/${g.slug}/zip?download=1`;

export function formatBytes(bytes: number) {
	return `${Math.round(bytes / 1024 / 1024)} MB`;
}
