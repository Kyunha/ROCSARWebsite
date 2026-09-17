import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with your actual GitHub username and repository
  site: 'https://Kyunha.github.io',
  base: '/ROCSARWebsite', 
  trailingSlash: 'always', // This strictly prevents the 404 error on GitHub Pages
});
