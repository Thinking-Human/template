// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import review from './src/integrations/review.mjs';

// Writing template for https://thinking-human.github.io/ — same build as the site,
// so a post previews here exactly as it will look there.
export default defineConfig({
  site: 'https://thinking-human.github.io',
  trailingSlash: 'ignore',
  // No landing page here: open the post list directly.
  redirects: { '/': '/blog/' },
  // review(): dev-only comment API for draft review (see src/components/ReviewMode.astro).
  integrations: [mdx(), review()],
  // three.js (side-panel scene) is one large lazily loaded chunk, by design.
  vite: { build: { chunkSizeWarningLimit: 800 } },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
