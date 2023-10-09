import bcrypt from 'bcrypt'
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'

export const usersRouter = express.Router()

usersRouter.get('/',async (_req: Request, res: Response) => {
  const users = await User.find({}).populate('notes', {
    content: 1,
    date: 1
  })
  res.json(users)
})

usersRouter.post('/',async (req: Request, res: Response) => {
  const { body } = req
  const { username, name, password } = body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const user = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
})
