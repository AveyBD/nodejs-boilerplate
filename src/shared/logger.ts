import { createLogger, format } from 'winston'
// eslint-disable-next-line import/first
import path from 'path'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`
})
export const logger = createLogger({
  level: 'silly',
  format: combine(label({ label: '😐' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'info',
        'info-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '15d'
    })
  ]
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: '❌' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'error-%DATE%.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '15d'
    })
  ]
})
