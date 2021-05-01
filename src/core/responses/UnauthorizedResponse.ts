import { JsonResponse, JsonResponseBody } from "./JsonResponse"

/**
 * Defines the format of the response when attempting to access an endpoint
 * that requires authentication.
 */
export const UnauthorizedResponse = new (class UnauthorizedResponse extends JsonResponse {
  constructor() {
    super(401)
  }

  protected get jsonBody(): JsonResponseBody {
    return { message: "Unauthorized" }
  }
})()
