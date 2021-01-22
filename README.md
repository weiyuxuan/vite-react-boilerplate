# snowpack-react-boilerplate

A simple and easy boilerplate for react developer, based on snowpack.

## Features

#### Commit Lint

Checks if your commit messages meet the [conventional commit format](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

#### Next generation JavaScript & CSS

Use ESNext and PostCSS to build your react app.

#### Hot Reload

Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page.

#### Code Format

With the right editor setup, your code will automatically be formatted and linted as you work.

#### Faster build

Based on JavaScript's native module system (known as ESM) to avoid unnecessary bundle work.

## Quick Start

1. Make sure that you have Node.js 10.13.0(LTS) or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/weiyuxuan/snowpack-react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `npm i` to install dependencies.
5. Run `npm run dev` to see the example app at http://localhost:8080.
6. Run `npm run build` to build production bundle.

## Dependencies

### snowpack

- [`snowpack`](https://github.com/snowpackjs/snowpack) - Lightning-fast frontend build tool.
- [`@snowpack/plugin-sass`](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-sass) - Sass support to any Snowpack project.
- [`@snowpack/plugin-react-refresh`](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-react-refresh) - Transforms JavaScript files containing React components automatically to enable React Fast Refresh via Snowpack's HMR API.

### ESLint

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - a simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.
- [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint.
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
