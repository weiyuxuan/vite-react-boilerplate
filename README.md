# Vite React Boilerplate

A simple and easy boilerplate for react developer, based on vite 4.

## Features

#### Commit Lint

Checks if your commit messages meet the [conventional commit format](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

#### Next generation JavaScript & CSS

Use ESNext, TypeScript and PostCSS to build your react app.

#### Hot Reload

Your saved changes to the JS and CSS are reflected instantaneously without refreshing the page.

#### Code Format

With the right editor setup, your code will automatically be formatted and linted as you work.

#### Faster build

Based on JavaScript's native module system (known as ESM) to avoid unnecessary bundle work.

## Quick Start

1. Make sure that you have Node.js v14.18.3 or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/weiyuxuan/vite-react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `npm ci` to install dependencies.
5. Run `npm run dev` to see the example app at <http://localhost:3000>.
6. Run `npm run build` to build production bundle.

## Dependencies

### vite

- [`vite`](https://github.com/vitejs/vite) - Next Generation Frontend Tooling.
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) - Speed up your Vite dev server with SWC.

### ESLint

- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - An ESLint plugin which provides lint rules for TypeScript codebases.
- [`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard) - An ESLint Shareable Config for JavaScript Standard Style.
- [`eslint-config-standard-react`](https://www.npmjs.com/package/eslint-config-standard-react) - An ESLint Shareable Config for React/JSX support in JavaScript Standard Style.

### Stylelint

- [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) - The standard shareable config for Stylelint.
- [`stylelint-config-standard-scss`](https://www.npmjs.com/package/stylelint-config-standard-scss) - The standard shareable SCSS config for Stylelint.
- [`stylelint-config-rational-order`](https://www.npmjs.com/package/stylelint-config-rational-order) - Stylelint config that sorts related property declarations by grouping together following the order of the CSS specification.
