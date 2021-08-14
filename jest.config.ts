import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
}

export default config;
