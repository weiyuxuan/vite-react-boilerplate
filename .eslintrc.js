module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'react-hooks', 'import', 'prettier'],
  rules: {
    'arrow-parens': [2, 'always'],
    'max-len': [2, { code: 80, ignoreStrings: true, ignoreComments: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console':
      process.env.NODE_ENV === 'production'
        ? [2, { allow: ['warn', 'error'] }]
        : [1, { allow: ['warn', 'error'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {},
};
