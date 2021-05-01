import apiDocs from "@app/config/api-docs.json"
import { IS_DEV_ENVIRONMENT } from "@app/config/environment"
import { Router } from "express"
import swaggerUi from "swagger-ui-express"
import auth from "./token"

/**
 * Routes that doesn't require authentication.
 */
const publicRoutes = Router()

publicRoutes.use("/token", auth)

publicRoutes.get("/healthcheck", (_req, res) => {
  res.sendStatus(200)
})

if (IS_DEV_ENVIRONMENT) {
  publicRoutes.use("/docs", swaggerUi.serve)
  publicRoutes.get("/docs", swaggerUi.setup(apiDocs))
}

export default publicRoutes
