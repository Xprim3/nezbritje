import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Ensure that all links resolve from the root

  build: {
    rollupOptions: {
      input: {
        // Main entry file at the root
        main: resolve(__dirname, 'index.html'),  
        
        // Other pages inside the pages folder
        cart: resolve(__dirname, 'pages/cart.html'),
        
        // Optionally, add JS entry points if needed
        uicomponents: resolve(__dirname, 'src/uicomponents.js'),
      },
      output: {
        dir: 'dist',  // Output directory for the built files
      }
    },
  },

  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),  // For easier imports
    },
  },
});
