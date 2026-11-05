// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import criticalCss from './integrations/critical-css.mjs';

import sitemap from '@astrojs/sitemap';

// Pages that ship `noindex` (see their Layout props); kept out of the sitemap.
const noindexPages = new Set([
  '/industry-solutions',
  '/finance-marketing',
  '/legal-marketing',
  '/provisors',
  '/brandrise/intake',
  '/privacy-policy',
  '/terms-and-conditions',
]);

// https://astro.build/config
export default defineConfig({
  // Canonical domain: the site's own redirect chain forces every request (www/non-www,
  // http/https) onto this URL, so it's the single source of truth for canonicals,
  // the sitemap, and Astro.url resolution.
  site: 'https://www.ascendsmartly.com',
  // Site stays statically prerendered by default. The two chat API routes
  // opt into on-demand rendering individually via `export const prerender = false`.
  adapter: vercel(),
  integrations: [
    react(),
    criticalCss(),
    sitemap({
      // /law and /finance are noindexed demo microsites (portfolio showcases of what
      // Ascend builds for clients), not real indexable pages — keep them, their landing
      // pages, the API routes, and /industry-solutions (a noindexed ProVisors-referral
      // page, kept separate from the public /industry page by design) out of the
      // sitemap submitted to search engines. /sdi is a private, noindexed client handoff
      // page (a launch package for Soaring Dragonfly Institute) and stays out as well, and
      // /photos is the password-protected photo gallery area.
      // Also keep every page that carries a noindex tag out of the sitemap (sending crawlers a
      // URL and a "don't index this" tag together is a mixed signal): the ProVisors/industry
      // landing pages, the BrandRise intake form, and the legal boilerplate.
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '');
        return (
          !/\/(law|finance|sdi|photos)(\/|$)/.test(pathname) &&
          !pathname.startsWith('/api/') &&
          !noindexPages.has(pathname)
        );
      },
    }),
  ],
  redirects: {
    '/meet': 'https://meet.google.com/nqd-ofic-mdc',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});