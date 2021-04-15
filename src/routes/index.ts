import apiDocs from "@app/config/api-docs.json"
import { IS_DEV_ENVIRONMENT } from "@app/config/environment"
import { Router } from "express"
import swaggerUi from "swagger-ui-express"

const routes = Router()

routes.get("/healthcheck", (_req, res) => {
  res.sendStatus(200)
})

if (IS_DEV_ENVIRONMENT) {
  routes.use("/docs", swaggerUi.serve)
  routes.get("/docs", swaggerUi.setup(apiDocs))
}

export default routes
