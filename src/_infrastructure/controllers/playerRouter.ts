import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { MPlayer } from '../../_domain/repositories/MPlayer'

import { playerController } from './dependencies'

export const playerRouter = express.Router()

playerRouter.post("/:id/counter", playerController.execute.bind(playerController));

// playerRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.params)
//     const { id } = req.params
//     MPlayer.find({id: id}).then(player => {
//       if (player) {
//         return res.json(player)
//       } else {
//         res.status(404).end()
//       }
//     }).catch(err => { next(err) })
// })

//   notesRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params
//     Note.findById(id).then(note => {
//       if (note) {
//         return res.json(note)
//       } else {
//         res.status(404).end()
//       }
//     }).catch(err => { next(err) })
//   })