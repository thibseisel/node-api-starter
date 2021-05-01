import { AccessToken } from "@app/models"
import { JsonResponse, JsonResponseBody } from "./JsonResponse"

/**
 * Response sent after an user successfully authenticated.
 * Its exposes the generated access token to be used by the user to authenticate subsequent requests.
 */
export class TokenResponse extends JsonResponse {
  /**
   * @param token Details of the generated access token.
   */
  constructor(readonly token: AccessToken) {
    super(201)
  }

  protected get jsonBody(): JsonResponseBody {
    return this.token
  }
}
