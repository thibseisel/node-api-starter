import { error } from "@app/core/error"

/**
 * Whether this application is running in development mode.
 */
export const IS_DEV_ENVIRONMENT: boolean =
  process.env.NODE_ENV === "development"

/**
 * Sequence to be used as the secret key for generating JSON Web Tokens.
 */
export const JWT_SECRET_KEY: string =
  process.env.JWT_SECRET_KEY ??
  error("JWT_SECRET_KEY environment variable is not defined")

/**
 * Name of the algorithm used to generated JSON Web Tokens.
 */
export const TOKEN_ALGORITHM = "HS256"

/**
 * Lifetime of a JSON Web Token.
 */
export const TOKEN_LIFESPAN_SECONDS = 3600
