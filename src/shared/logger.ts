import winston from 'winston'
import path from 'path'

export const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'silly.log'),
      level: 'silly'
    })
  ]
})

export const errorLogger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error'
    })
  ]
})
