import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://beingforthebenefit.github.io',
  base: '/rootedgbh',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
});