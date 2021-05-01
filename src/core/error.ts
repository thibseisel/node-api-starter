/**
 * Throw an error with an optional message.
 * This utility function makes it possible to throw errors in expressions,
 * allowing to replace
 * ```typescript
 * const foo = ...
 * const baz = foo?.bar?.baz
 * if (!baz) {
 *   throw Error("foo.bar.baz is not defined!")
 * }
 * ```
 * with the following:
 * ```typescript
 * const foo = ...
 * const baz = foo?.bar?.baz ?? error("foo.bar.baz is not defined!")
 * ```
 *
 * @param message Optional message to be set on the error.
 */
export function error(message?: string): never {
  throw Error(message)
}
