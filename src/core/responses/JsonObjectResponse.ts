import { JsonResponse } from "./JsonResponse"

/**
 * A successful response that sends a single JSON object as the response body.
 * This is the de-facto response for GET requests that returns a single element.
 *
 * @template T Type of the JSON object payload.
 */
export class JsonObjectResponse<
  T extends Record<string, unknown>
> extends JsonResponse {
  /**
   * Creates a new response carrying a single JSON object.
   *
   * @param payload JSON object that will be used as the response body.
   */
  constructor(private readonly payload: T) {
    super(200)
  }

  protected get jsonBody(): Record<string, unknown> {
    return this.payload
  }
}
