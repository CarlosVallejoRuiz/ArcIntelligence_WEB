import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://CarlosVallejoRuiz.github.io',
  base: '/ArcIntelligence_WEB',
  trailingSlash: 'never',
  build: {
    assets: 'assets',
  },
});
