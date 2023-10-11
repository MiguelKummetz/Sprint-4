import { Request, Response } from 'express'

export const handlerError = (error: Error, _req: Request, res: Response) => {
    console.log('ERROR NAME => ' + error.name)
  
    if (error.name === 'CastError') {
      res.status(400).send({ error: 'id used is malformed' })

    } else if (error.name === 'ValidationError') {
      res.status(401).json({ error: 'invalid token' })

    } else if (error.name === 'JsonWebTokenError') {
      res.status(409).send({ error: error.message })

    } else {
      res.status(500).end()
    }
  }
