import { Config } from "@jest/types"

const jestConfig: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/test"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/**/*.(test|spec).ts"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@app/(.*)": "<rootDir>/src/$1",
    "^@test/(.*)": "<rootDir>/test/$1",
  },
}

export default jestConfig
