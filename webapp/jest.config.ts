export default {
    transform: {
        "^.+\.tsx?$": "ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ['./src/components'],
    testMatch: ["*/steps/.ts"],
    "testTimeout": 15000,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "jest-puppeteer",
}