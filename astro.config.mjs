import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourusername.github.io',  // Replace with your GitHub username
  base: '/your-repo-name',  // Replace with your repository name
});