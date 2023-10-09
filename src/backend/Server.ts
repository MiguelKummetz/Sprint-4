import mongoose from "mongoose"
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI as string

// conexion a mongodb
export const connectDB = () => {
  mongoose.connect(connectionString, {
     //  useNewUrlParser: true,
     //  useUnifiedTopology: true,
     //  useFindAndModify: false,
    //   useCreateIndex: true
  })
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