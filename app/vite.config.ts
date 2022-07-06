import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // Temporary solution for github pages!
  base: 'product-preview-card-frontend-mentor',
  build: {
    outDir: '../',
  },
});
