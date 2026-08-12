// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import criticalCss from './integrations/critical-css.mjs';

import sitemap from '@astrojs/sitemap';

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
      // sitemap submitted to search engines.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return (
          !/\/(law|finance)(\/|$)/.test(pathname) &&
          !pathname.startsWith('/api/') &&
          pathname !== '/industry-solutions/' &&
          pathname !== '/industry-solutions'
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