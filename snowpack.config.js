/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // Customize the file structure of your project.
  // The key is the name of the directory and the value is where you’d like them in the final build.
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
