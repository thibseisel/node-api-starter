import { IS_DEV_ENVIRONMENT } from "@app/config/environment"
import winston, { format } from "winston"
import DailyRotateFile from "winston-daily-rotate-file"

const logTransports: Array<winston.transport> = [
  new winston.transports.Console({
    level: IS_DEV_ENVIRONMENT ? "debug" : "info",
    format: format.combine(format.splat(), format.colorize(), format.simple()),
  }),
]

if (!IS_DEV_ENVIRONMENT) {
  logTransports.push(
    new DailyRotateFile({
      level: "info",
      dirname: "logs",
      filename: "%DATE%.log",
      datePattern: "YYYY-MM-DD_HH",
      maxSize: "20m",
      maxFiles: "14d",
      format: format.combine(
        format.timestamp(),
        format.splat(),
        format.printf(
          (info) =>
            `${info.timestamp} [${info.level.toUpperCase()}] ${info.message}`
        )
      ),
    })
  )
}

export default winston.createLogger({
  transports: logTransports,
})
