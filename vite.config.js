import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'home.html'),
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})