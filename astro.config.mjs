import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://beingforthebenefit.github.io',
  base: '/rootedgbh',
  outDir: './dist',
  build: {
    assets: '_assets'
  }
});