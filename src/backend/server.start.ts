import express from 'express'
import mongoose from 'mongoose'
import config from '../../config'
import {connectDB} from './Server'
import { logger } from '../middleware/logger'
import { notFound } from '../middleware/notFound'
import { notesRouter } from '../controllers/notes'
import { usersRouter } from '../controllers/users'
import { handlerError } from '../middleware/handleError'
// import { loginRouter } from '../controllers/login'
connectDB()
export const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (_req, res) => {
	res.send('<h1>Hello World</h1>')
  })

  app.use('/api/notes', notesRouter)
  app.use('/api/users', usersRouter)
  // app.use('/api/login', loginRouter)

  app.use(handlerError)
  app.use(notFound)

  const PORT = config.NODE_ENV === 'test' ? config.PORT : 3033
  export const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

process.on('uncaughtException', () => {
  mongoose.connection.close()
})