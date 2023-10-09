import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
import { User } from '../models/User'
export const loginRouter = express.Router()

loginRouter.post('/',async (req: Request, res: Response) => {
  const { body } = req
  const { username, password } = body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: 'invalid user or password'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.username
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res.send({
    name: user.name,
    username: user.username,
    token
  })
})
