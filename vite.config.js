import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Ensure that all links resolve from the root

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'pages/cart.html'),
        notifications: resolve(__dirname, 'pages/notifications.html'),
        uicomponents: resolve(__dirname, 'src/uicomponents.js'),
      },
      output: {
        dir: 'dist',
      }
    },
  },

  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
    },
  },
});
