import bcrypt from 'bcrypt'
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'

export const usersRouter = express.Router()

usersRouter.get('/', async (_req: Request, res: Response) => {
  const users = await User.find({})
  // .populate('notes', {
  //   content: 1,
  //   date: 1
  // })
  res.json(users)
})

usersRouter.post('/', async (req: Request, res: Response) => {
  const {
    username,
    name,
    password
  } = req.body

  if (!username || !name || !password) {
    return res.status(400).json({
      error: 'required field is missing'
    })
  }

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

usersRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    await User.findByIdAndDelete(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
})
