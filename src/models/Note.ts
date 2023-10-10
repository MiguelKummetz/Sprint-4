import mongoose from 'mongoose'
const { model, Schema } = mongoose

// export default interface NoteType {
//   content: string,
//   date: string, // .toISOString()
//   important: boolean,
// }

const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean,
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
})

noteSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const Note = model('Note', noteSchema)