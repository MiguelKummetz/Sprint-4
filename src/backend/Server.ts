import mongoose from "mongoose"
import config from '../../config'

const connectionString = config.NODE_ENV === 'test' ? config.MONGO_DB_URI_TEST : config.MONGO_DB_URI

// conexion a mongodb
export const connectDB = () => {
  mongoose.connect(connectionString?? "")
    .then(() => {
      console.log('Database conected')
    }).catch(err => {
      console.error(err)
    })

  process.on('uncaughtException', error => {
    console.error(error)
    mongoose.connection.close()
  })
}
