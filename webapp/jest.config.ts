export default {
    transform: {
        "^.+\.tsx?$": "ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["**/*.tsx"],
    testMatch: ["*/steps/.ts"],
    "testTimeout": 15000,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "jest-puppeteer",
}