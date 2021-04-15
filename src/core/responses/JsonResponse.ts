import type express from "express"
import { ApiResponse } from "./ApiResponse"

/**
 * Format of a JSON response body.
 * This should be either an object, an array or `undefined`.
 */
export type JsonResponseBody =
  | Record<string, unknown>
  | ReadonlyArray<unknown>
  | undefined

/**
 * Base class for responses whose body is a JSON object or array.
 */
export abstract class JsonResponse extends ApiResponse {
  /**
   * @param status HTTP status code associated with the response.
   * Should be an integer between `100` and `599`.
   */
  protected constructor(status: number) {
    super(status)
  }

  /**
   * Override this property to define the shape of the JSON response.
   * When returning `undefined` an empty response body is sent.
   */
  protected abstract get jsonBody(): JsonResponseBody

  send(res: express.Response): express.Response {
    return res.status(this.status).json(this.jsonBody)
  }
}
