import { ApiResponse, BadRequestResponse } from "@app/core/responses"
import { ApiError } from "./ApiError"

/**
 * Thrown when a request should fail due to having one or more properties that are missing or invalid.
 */
export class InvalidRequestPropertyError extends ApiError {
  /**
   * @param propertyName Name of the query parameter, request body property or header name whose value was invalid.
   * This may be a dot-separated string, for example `user.role` in case the failing property
   * is part of a deep object structure.
   * @param reason Message describing why that property's value is invalid.
   * If this is not specified the property is considered invalid due to being missing.
   */
  constructor(propertyName: string, reason?: string) {
    super(buildErrorMessage(propertyName, reason))
  }

  handle(): ApiResponse {
    return new BadRequestResponse(this.message)
  }
}

function buildErrorMessage(propertyName: string, reason?: string): string {
  if (!reason) {
    return `Missing property "${propertyName}"`
  } else {
    return `Invalid value for property "${propertyName}": ${reason}`
  }
}
