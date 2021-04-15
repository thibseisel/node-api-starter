import { apiExceptionHandler } from "@app/core/middleware"
import compression from "compression"
import express from "express"
import routes from "./routes"

// Create Express server
const app = express()

// Express configuration
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", routes)
app.use(apiExceptionHandler())

/**
 * Configured instance of the Express application.
 * Note that it is not started to allow end-to-end testing.
 */
export default app
