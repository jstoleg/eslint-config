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
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prefix-types',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'max-len': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.jsx'] }],
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
    'no-nested-ternary': 0,
    'no-mixed-operators': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/aria-role': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, { 'ignoreRestSiblings': true }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'prefix-types/prefer-type-prefix': ['error', { 'allow': 'always' }],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
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
          ],
        ],
      },
    ],
  },
}
