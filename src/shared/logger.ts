import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format
// eslint-disable-next-line import/first
import path from 'path'

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
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'silly.log'),
      level: 'silly'
    })
  ]
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: '❌' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error'
    })
  ]
})
