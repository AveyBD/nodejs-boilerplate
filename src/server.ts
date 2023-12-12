import mongoose from 'mongoose'
import app from './app'
import config from '../config'
import { errorLogger, logger } from './shared/logger'

async function main (): Promise<void> {
  logger.info('Connecting to DB...')
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DB Connected')
    app.listen(config.port, () => {
      logger.info(`App listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect', error)
  }
}
void main()
