import { JsonResponse, JsonResponseBody } from "./JsonResponse"

/**
 * Defines the format of the response when a request is rejected due
 * to having one or more parameters that are invalid.
 */
export class BadRequestResponse extends JsonResponse {
  /**
   * @param reason Message explaining which parameters were rejected and why.
   */
  constructor(private readonly reason: string) {
    super(400)
  }

  protected get jsonBody(): JsonResponseBody {
    return { message: this.reason }
  }
}
