import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart.html'),
        // Add uicomponents.js as part of your input
        uicomponents: resolve(__dirname, 'src/uicomponents.js'), // Entry for your JS components
      },
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'), // You can set an alias for easier imports
    },
  },
})
