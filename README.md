# Node API starter

This is a template project for quickly setting up a server-side web application with the following tech stack:

- nodejs
- TypeScript
- Express
- Docker

# What's included?

## Pre-build features

- JSON Web Token-based authentication
- Global error handling
- API response standardization (subclasses of `ApiResponse`)

## Tooling

- A standard project structure that groups files by feature and separates tests from production sources
- 2 configurations to run the application in development mode or to build for production
- Automated server restart on local code change
- Self-hosted OpenAPI documentation
- Unit and end-to-end automated tests
- Portable static code analysis
- Consistent code formatting
- Pre-commit code quality validation
- Full integration with the following editors:
  - Visual Studio Code
  - IntelliJ / WebStorm

# Getting started

## Prerequisites

You need to have the following software installed:

- nodejs 14.x
- Docker Compose

## Project initial setup

Follow these steps to quickly setup your new project from this template:

1. Either clone or download this project's sources as a zip archive. If you cloned this repository make sure to delete the `.git` folder and run `git init` so that the commit history is reset.

2. Open `package.json` with a text editor and replace values for `name`, `description`, `version`, `author`, etc. to match your project's.

3. Run the following command:
   ```bash
   docker-compose build
   ```
   This may take a few minutes depending on your internet connection.

# Running the app

The whole development environment is run within Docker containers.
Execute the following command to start all containers:

```bash
docker-compose up -d
```

You should now have a container listening on `localhost:8081`.
You're now ready to code the next Facebook!

# Debugging

When running the application in development mode (the default when using `docker-compose.yml`), the app process is waiting for the debugger to attach on port `9229`.
Depending on your text editor you may need to add a specific configuration.

## Visual Studio Code

Launch the pre-configured `Docker: Attach to Node` Run and Debug configuration to attach the debugger.

## IntelliJ / Webstorm

You should use the pre-configured `Attach to Node` Run configuration to attach the debugger.

# Running tests

You can run all tests at once using the following command:

```bash
npm test
```

If you need to run a specific test (for example `token.spec.ts`):

```bash
npm test token
```

To re-run tests on code change so that you can go TDD:

```bash
npm test -- --watch
```

## Debugging tests

Because tests are run locally with `ts-node` and not from within the container, attaching the debugger using the procedure described above won't work.

See the section that matches your code editor below.
If you are using another editor, you may need to configure it to run `jest` with the debugger active.

### Visual Studio Code

Open the spec file containing the test you'd like to debug, then launch the `Run tests in current file` Run and Debug configuration.

### IntelliJ / Webstorm

These IDEs should have built-in support for the Jest test framework.
Open the spec file you'd like to debug, click on the green arrow gutter icon that's on the same line as the `describe`,
`it` or `test` function call, then select "Debug" in the dropdown list.

# What dependencies are included and why?

| Dependency                  | Rationale                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `compression`               | Adds Gzip compression to Express responses, making requests faster                    |
| `express`                   | Web server framework                                                                  |
| `express-async-handler`     | Simplifies defining express middlewares that use ES6 `async/await`                    |
| `express-jwt`               | Add support for stateless authentication with JSON Web Tokens                         |
| `jsonwebtoken`              | Generate and parse JSON Web Tokens                                                    |
| `lodash`                    | Array operators and general purpose utilities                                         |
| `luxon`                     | Safe replacement of JS `Date`                                                         |
| `module-alias`              | Defines aliases to avoid importing modules with backwards paths                       |
| `morgan`                    | Request logging middleware for Express                                                |
| `multer`                    | Express middleware to handle file uploads                                             |
| `swagger-ui-express`        | Serves interactive API documentation from OpenApi3 definition                         |
| `tslib`                     | Reduces duplication of compiled code when using features only available in TypeScript |
| `winston`                   | Logger facade for nodejs                                                              |
| `winston-daily-rotate-file` | Strategy for rotating log files                                                       |

| Dev dependency                     | Rationale                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `@types/*`                         | TypeScript type definitions for JavaScript-only dependencies                                                |
| `@typescript-eslint/eslint-plugin` | Configures ESLint with additional rules that rely on TypeScript features                                    |
| `@typescript-eslint/parser`        | Makes ESLint work with TypeScript                                                                           |
| `concurrently`                     | Defines a package.json task that runs TypeScript and nodemon in parallel                                    |
| `eslint`                           | Static code analysis for TypeScript                                                                         |
| `eslint-config-prettier`           | Disables formatting rules from ESLint that conflicts with Prettier                                          |
| `eslint-plugin-jsdoc`              | Defines rules for checking format of JSDoc comments                                                         |
| `eslint-plugin-no-null`            | Disallows usages of `null`                                                                                  |
| `husky`                            | Configures local on-commit hook on install. _Note: stick to husky@4.x for use in non-open source projects_. |
| `jest`                             | Test framework                                                                                              |
| `lint-staged`                      | Combined with `husky`, runs lint/format tasks only on files to be committed                                 |
| `nodemon`                          | Auto-reloads server on file changes, used for development                                                   |
| `prettier`                         | An anti-bikeshedding file formatter                                                                         |
| `supertest`                        | Framework for testing HTTP servers                                                                          |
| `ts-jest`                          | Adds support for running tests written in TypeScript                                                        |
| `ts-node`                          | Runs TypeScript code by transpiling on the fly, required by `ts-jest`                                       |
| `typescript`                       | type-safe JavaScript                                                                                        |

# Known issues

- When running tests from the command-line, the last executed end-to-end test that uses `supertest` will report having an open handle. This is a known issue with `supertest` that occurs when using Jest with async functions.
