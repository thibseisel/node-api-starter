/**
 * Base class for a response returned by the REST API.
 *
 * This provides an abstraction over configuring `express.Response` instances directly
 * in route handlers and is meant for both successes and errors.
 */
export abstract class ApiResponse {
  /**
   * @param status HTTP status code associated with the response.
   * Should be an integer between `100` and `599`.
   */
  protected constructor(readonly status: number) {
    if (!Number.isInteger(status) || status < 100 || status >= 600) {
      throw RangeError(
        `HTTP status codes should be a integer between 100 and 599, but was ${status}`
      )
    }
  }

  /**
   * Send the content of this response to the REST client.
   * Implementations should set the status code, the content of the response body
   * and appropriate HTTP headers such as `Content-Type`.
   *
   * @param res Express response builder.
   * @returns `res`, for convenience chaining.
   */
  abstract send(res: Express.Response): Express.Response
}
