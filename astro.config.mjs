// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wilfredchetat.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
