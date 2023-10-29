import { Schema, model } from 'mongoose'

const playerSchema = new Schema({
  id: String,
  name: String,
  totalPlays: Number,
  totalWins: Number,
  creationDate: Date
})

playerSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const MPlayer = model('Player', playerSchema)
