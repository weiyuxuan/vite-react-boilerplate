module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/*.jsx'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ],
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
  },
};
