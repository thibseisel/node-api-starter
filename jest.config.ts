import { Config } from "@jest/types"

const jestConfig: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      isolatedModules: true,
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

process.env = {
  NODE_ENV: "development",
  JWT_SECRET_KEY: "secret",
}
