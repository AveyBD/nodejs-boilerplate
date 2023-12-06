import mongoose from 'mongoose'
import app from './app'
import config from '../config'

async function main() {
  console.log('Connecting to DB...')
  try {
    await mongoose.connect(config.database_url as string)
    console.log('DB Connected')
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect')
    console.log(error)
  }
}
main()
