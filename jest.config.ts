import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  displayName: "TEST",
  rootDir: __dirname,
  coverageDirectory: "<rootDir>/.coverage",
  testPathIgnorePatterns: ["<rootDir>/build"],
};

export default config;
