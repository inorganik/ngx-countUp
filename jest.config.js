// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
const esModules = ["ngx-countup", ".*\\.mjs"].join("|");

module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/src/tsconfig.spec.json",
    },
  },
};
