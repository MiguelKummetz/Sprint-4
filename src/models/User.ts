import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  name: String,
  passwordHash: String,
  // notes: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Note'
  // }]
})

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

export const User = model('User', userSchema)
