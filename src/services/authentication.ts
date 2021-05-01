import {
  JWT_SECRET_KEY,
  TOKEN_ALGORITHM,
  TOKEN_LIFESPAN_SECONDS,
} from "@app/config/environment"
import { AccessToken } from "@app/models"
import jwt from "jsonwebtoken"

/**
 * Attempt to authenticate with the provided credentials.
 * An access token is generated if the authentication is successful ;
 * that token should be used by the authenticated client to access endpoints that requires authentication.
 *
 * @param username Identifier of the user that attempts to login.
 * @param password User-defined password associated with the `username`.
 * @returns A newly generated access token, or `undefined` if the authentication failed.
 */
export async function login(
  username: string,
  password: string
): Promise<AccessToken | undefined> {
  if (areValidCredentials(username, password)) {
    return {
      token: await generateAccessToken(),
      expiresIn: TOKEN_LIFESPAN_SECONDS,
    }
  }
  return undefined
}

function areValidCredentials(username: string, password: string): boolean {
  // TODO Rewrite this function to implement your own credential-checking logic.
  return username === "root" && password === "root"
}

async function generateAccessToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {},
      JWT_SECRET_KEY,
      {
        algorithm: TOKEN_ALGORITHM,
        expiresIn: TOKEN_LIFESPAN_SECONDS,
      },
      (error, token) => {
        if (!error && token) {
          resolve(token)
        } else {
          reject(error)
        }
      }
    )
  })
}
