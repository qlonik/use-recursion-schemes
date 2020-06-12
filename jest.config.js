module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '(<rootDir>/test|__tests__)/(.+/)?(__helpers__|__fixtures__)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test', '__tests__'],
  coverageReporters: ['text', ['html-spa', { subdir: 'html' }]],
};
