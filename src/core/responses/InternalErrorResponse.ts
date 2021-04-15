import { JsonResponse, JsonResponseBody } from "./JsonResponse"

/**
 * Defines the content of the response that is sent when this server fails unexpectedly.
 */
export const InternalErrorResponse = new (class extends JsonResponse {
  constructor() {
    super(500)
  }

  protected get jsonBody(): JsonResponseBody {
    return {
      message: "An unexpected error occurred. Please retry later.",
    }
  }
})()
