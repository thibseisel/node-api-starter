import logger from "@app/core/logger"
import morgan from "morgan"
import app from "./app"

app.use(
  morgan("short", {
    stream: { write: (text) => logger.info(text) },
  })
)

const environment = process.env.NODE_ENV
const port = Number(process.env.PORT) || 3000
app.listen(port, () => {
  logger.info(
    "Server is running at https://localhost:%d in %s mode",
    port,
    environment
  )
})
