import express from 'express'
import mongoose from 'mongoose'
import {connectDB} from './Server'
import { logger } from '../middleware/logger'
import { notFound } from '../middleware/notFound'
import { notesRouter } from '../controllers/notes'
import { usersRouter } from '../controllers/users'
// import { loginRouter } from '../controllers/login'
connectDB()
export const app = express()

app.use(express.json())
// app.use(logger)

app.get('/', (_req, res) => {
	res.send('<h1>Hello World</h1>')
  })

  app.use('/api/notes', notesRouter)
  app.use('/api/users', usersRouter)
  // app.use('/api/login', loginRouter)

  // app.use(notFound)

  const PORT = 3001 || process.env.PORT
  export const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

process.on('uncaughtException', () => {
  mongoose.connection.close()
})