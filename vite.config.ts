import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  // specify the root of a project using vite.
  root: './',

  // resolve the alias of the @ prefix.
  resolve: {
    alias: [
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
    ],
  },

  // enable vite plugins and their options.
  plugins: [
    react(),
  ],

  // configure vite's css modules.
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },

  // configure the dev server.
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    hmr: true,
  },

  // configure your final build.
  build: {
    outDir: 'dist',
  },

  // configure the preview of final build.
  preview: {
    port: 3001,
    open: true,
  },
})
