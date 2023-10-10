import express from 'express'
import { Request, Response, NextFunction } from 'express'

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method)
    console.log(req)
    console.log(req.body)
    console.log('-------')
    next()
  }