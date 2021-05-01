import { authentication } from "@app/core/middleware"
import { Router } from "express"
import publicRoutes from "./public"

const routes = Router()
routes.use("/public", publicRoutes)

// All routes declared below this point requires token authentication.
routes.use(authentication())

export default routes
