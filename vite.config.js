import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),           // Main entry file
        cart: resolve(__dirname, 'public/cart.html'),     
        uicomponents: resolve(__dirname, 'src/uicomponents.js'), // Entry for your UI components JavaScript
      },
      output: {
        dir: 'dist',
      }
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'), // Alias for easier imports
    },
  },
})
