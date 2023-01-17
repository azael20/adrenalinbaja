module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        // semi: false,
        doubleQuote: false,
        // jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
  },
};
