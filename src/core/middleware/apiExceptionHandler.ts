import { ApiError } from "@app/core/errors"
import logger from "@app/core/logger"
import { InternalErrorResponse } from "@app/core/responses"
import { ErrorRequestHandler } from "express"

/**
 * Creates an `Express` error handler that handles all uncaught errors.
 */
export function apiExceptionHandler(): ErrorRequestHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: unknown, req, res, _next) => {
    if (err instanceof ApiError) {
      if (res.headersSent) {
        logger.error(
          "Request %s %s failed after response has been sent with %s",
          req.method,
          req.path,
          err
        )
      } else {
        const response = err.handle()
        response.send(res)
      }
    } else {
      logger.error(
        "Request %s %s failed unexpectedly with %s",
        req.method,
        req.path,
        err
      )
      if (!res.headersSent) {
        InternalErrorResponse.send(res)
      }
    }
  }
}
