module.exports = {
  roots: ['<rootDir>/src/module'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
