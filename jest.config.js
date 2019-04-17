// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!countup.js)']
};
