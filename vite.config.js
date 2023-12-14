import { defineConfig } from 'vite'
//https://stackoverflow.com/questions/67781170/bundle-js-and-css-into-single-file-with-vite
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOutputOptions: {
    entryFileNames: '[name].js',
  },
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})


