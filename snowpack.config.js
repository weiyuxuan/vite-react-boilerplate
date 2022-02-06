/** @type { import("snowpack").SnowpackUserConfig } */

module.exports = {
  // Specify the root of a project using Snowpack.
  root: './',

  // Mount local directories to custom URLs in your built application.
  // The key is the name of the directory and the value is where you’d like them in the final build.
  mount: {
    public: { url: '/', static: true, resolve: false },
    src: { url: '/bundle' },
  },

  // Configure import aliases for directories and packages.
  alias: {
    '@components': './src/components',
    '@constants': './src/constants',
    '@hooks': './src/hooks',
  },

  // Enable Snowpack plugins and their options.
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],

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
  },

  // Enable an SPA Fallback in development
  routes: [],

  // Using Snowpack's built-in bundling support.
  optimize: {
    // Built-in bundle has css module compile issues.
    // See https://github.com/withastro/snowpack/issues/3243
    bundle: false,
    minify: true,
    target: 'es2020',
    sourcemap: false,
  },

  // Configure how npm packages are installed and used.
  packageOptions: {},
};
