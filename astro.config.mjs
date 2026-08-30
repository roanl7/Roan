import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production domain before deploying — it powers
// canonical URLs, the sitemap, and Open Graph tags across the project.
export default defineConfig({
  site: 'https://roanl.netlify.app',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [sitemap()],
});
