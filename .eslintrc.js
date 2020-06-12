module.exports = {
  root: true,
  env: { es6: true, node: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    // eslint and typescript are always first
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // all other plugins
    'plugin:import/recommended',
    'plugin:import/typescript',

    // prettier is always last
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // eslint rules sorted alphabetically
    'sort-imports': 'off',

    // plugin rules, sorted alphabetically
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
