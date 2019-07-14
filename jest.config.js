const ignorePatterns = [
  "<rootDir>/dist/",
  "<rootDir>/node_modules/",
  "<rootDir>/test-helper/",
  "<rootDir>/test/test-helper/",
  "<rootDir>/src/test-helper/",
];

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
