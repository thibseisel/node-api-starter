import { InvalidRequestPropertyError } from "@app/core/errors"
import { TokenResponse, UnauthorizedResponse } from "@app/core/responses"
import { Auth } from "@app/services"
import { Router } from "express"
import asyncHandler from "express-async-handler"

/**
 * Defines routes used to perform authentication.
 */
export default Router().post(
  "/",
  asyncHandler(async (req, res) => {
    const username = req.body.username
    if (typeof username !== "string") {
      throw new InvalidRequestPropertyError("username", "it should be a string")
    }
    const password = req.body.password
    if (typeof password !== "string") {
      throw new InvalidRequestPropertyError("password", "it should be a string")
    }

    const token = await Auth.login(username, password)
    if (token) {
      new TokenResponse(token).send(res)
    } else {
      UnauthorizedResponse.send(res)
    }
  })
)
