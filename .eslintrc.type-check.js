module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['./.eslintrc.js', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  settings: {
    'import/resolver': { typescript: { alwaysTryTypes: true } },
  },
};
