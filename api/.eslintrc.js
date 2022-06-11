module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    jest: true,
    'jest/globals': true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: ['!**/*', 'src/types/graphql.d.ts'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },

    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
