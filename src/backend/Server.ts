import mongoose from "mongoose"
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString: string = 'mongodb+srv://ami:1234@cluster0.kyprtz4.mongodb.net/notes-app?retryWrites=true&w=majority'
//NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

// conexion a mongodb
export const connectDB = () => {
  mongoose.connect(connectionString)
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