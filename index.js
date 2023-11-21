module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'max-len': 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'simple-import-sort/imports': ['warn', {
      groups: [[
        // Side effect imports
        '^\\u0000',
        // Libs imports
        '^react$',
        '^[a-z]',
        // Imports starting with `@`
        '^@',
        // Imports starting with `../`
        '^\\.\\.(?!/?$)',
        '^\\.\\./?$',
        // Imports starting with `./`
        '^\\./(?=.*/)(?!/?$)',
        '^\\.(?!/?$)',
        '^\\./?$',
        // Styles
        '^.+\\.s?css$',
      ]],
    }],
    '@typescript-eslint/no-non-null-assertion': 0,
  },
}
