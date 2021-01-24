/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // Specify the root of a project using Snowpack.
  root: './',

  // Mount local directories to custom URLs in your built application.
  // The key is the name of the directory and the value is where you’d like them in the final build.
  mount: {
    public: { url: '/', static: true, resolve: false },
    src: { url: '/assets' },
  },

  // Configure import aliases for directories and packages.
  alias: {
    components: './src/components',
  },

  // Enable Snowpack plugins and their options.
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-sass'],

  // Configure the Snowpack dev server.
  devOptions: {
    port: 3000,
    hmr: true,
    hmrErrorOverlay: true,
  },

  // Configure your final build.
  buildOptions: {
    out: 'dist',
    baseUrl: '/',
    sourcemap: false,
  },

  // Enable an SPA Fallback in development
  routes: [],

  // Using Snowpack's built-in bundling support.
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },

  // Configure how npm packages are installed and used.
  packageOptions: {},
};
