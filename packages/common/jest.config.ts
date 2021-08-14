import type { Config } from "@jest/types";

// eslint-disable-next-line import/no-default-export
export default async function createJestConfig(): Promise<Config.InitialOptions> {
  return {
    collectCoverage: true,
    coverageDirectory: "../../dist",
    coverageReporters: ["clover", "html"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  }
}
