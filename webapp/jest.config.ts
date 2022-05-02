export default {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{tsx}"],
    transform: {
        "^.+\.tsx?$": "ts-jest"
    },
    testMatch: ["*/steps/.ts"],
    "testTimeout": 15000,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "jest-puppeteer",
}