import {
  JWT_SECRET_KEY,
  TOKEN_ALGORITHM,
  TOKEN_LIFESPAN_SECONDS,
} from "@app/config/environment"
import { UnauthorizedResponse } from "@app/core/responses"
import { RequestHandler } from "express"
import jwt, { UnauthorizedError } from "express-jwt"

const jwtAuth = jwt({
  secret: JWT_SECRET_KEY,
  algorithms: [TOKEN_ALGORITHM],
  exp: TOKEN_LIFESPAN_SECONDS,
})

/**
 * Creates a middleware that requires callers to authenticate with a JSON Web Token
 * to access the configured route or set of routes.
 *
 * The token should be specified as the value of the `Authorization` header:
 * ```
 * Authorization: Bearer <access_token>
 * ```
 */
export default function authentication(): RequestHandler {
  return (req, res, next) => {
    jwtAuth(req, res, (authError: unknown) => {
      if (authError instanceof UnauthorizedError) {
        UnauthorizedResponse.send(res)
      } else {
        next(authError)
      }
    })
  }
}
