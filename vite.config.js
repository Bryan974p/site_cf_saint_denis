import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/site_cf_saint_denis/', // Assurez-vous que cette ligne est correcte
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
