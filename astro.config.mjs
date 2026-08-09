import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// CHANGE THIS to your final domain before deploying.
// If using a bare github.io path (achintyarup-lgtm.github.io/fine-print),
// also set `base: '/fine-print'` below.
export default defineConfig({
  site: 'https://fineprint.achintyarupray.com',
  base: '/fine-print',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  },
  image: {
    // keeps large infographic PNGs from being over-compressed
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
