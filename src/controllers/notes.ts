import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { Note } from '../models/Note'
export const notesRouter = express.Router()

notesRouter.get('/',async (_req: Request, res: Response) => {
    const notes = await Note.find({})
    // .populate('user', {
    //     username: 1,
    //     name: 1
    //   })
      res.json(notes)
})

notesRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    Note.findById(id).then(note => {
      if (note) {
        return res.json(note)
      } else {
        res.status(404).end()
      }
    }).catch(err => { next(err) })
  })

notesRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const {
      content,
      important = false
    } = req.body
  
    // const authorization = req.get('authorization')
    // let token = ''
    // if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    //   token = authorization.substring(7)
    // }
    // let decodedToken = {}
    // try {
    //   decodedToken = jwt.verify(token, process.env.SECRET)
    // } catch (e) {
    //   next(e)
    // }
  
    // if (!token || !decodedToken.id) {
    //   return res.status(401).json({ error: 'token missing or invalid' })
    // }
  
    // const { id: userId } = decodedToken
    // const user = await User.findById(userId)
  
    if (!content) {
      return res.status(400).json({
        error: 'required "content" field is missing'
      })
    }
  
    const newNote = new Note({
      content,
      date: new Date(), // .toISOString()
      important,
      // user: user._id // user.toJSON().id
    })
  
    try {
      const savedNote = await newNote.save()
  
      // user.notes = user.notes.concat(savedNote._id)
      // await user.save()
  
      res.json(savedNote)
    } catch (e) {
      next(e)
    }
  })
  
notesRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const note = req.body
  
    const newNoteInfo = {
      content: note.content,
      important: note.important
    }
  
    // Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    //   .then(result => { res.json(result) })
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
      res.json(updatedNote)
    } catch (e) {
      next(e)
    }
  })

notesRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
  
    try {
      await Note.findByIdAndDelete(id)
      res.status(204).end()
    } catch (e) {
      next(e)
    }
  })