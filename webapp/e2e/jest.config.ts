export default {
    collectCoverage: true,
    collectCoverageFrom: ["e2e/steps/*.{ts}"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/steps/*.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "jest-puppeteer",
}