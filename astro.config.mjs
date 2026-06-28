import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arcintelligence.io',
  trailingSlash: 'never',
  build: {
    assets: 'assets',
  },
});
