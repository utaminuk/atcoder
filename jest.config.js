module.exports = {
  roots: ["<rootDir>/typescript"],
  testMatch: ["**/__test__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
