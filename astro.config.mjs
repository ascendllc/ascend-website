// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import criticalCss from './integrations/critical-css.mjs';

// https://astro.build/config
export default defineConfig({
  // Site stays statically prerendered by default. The two chat API routes
  // opt into on-demand rendering individually via `export const prerender = false`.
  adapter: vercel(),
  integrations: [react(), criticalCss()],
  vite: {
    plugins: [tailwindcss()]
  }
});
