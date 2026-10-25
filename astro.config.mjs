// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wilfredchetat.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // the CSS is a few KB per page; inlining it removes render-blocking requests
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
