import supertest from 'supertest'
import { app } from '../src/backend/server.start'
// import NoteType from '../src/models/Note'
export const api = supertest(app)


export const initialNotes = [
  {
    content: 'this is a test note',
    date: new Date(),
    important: true
  }, {
    content: 'this is a test note too',
    date: new Date(),
    important: false
  }, {
    content: 'this is also a test note',
    date: new Date(),
    important: true
  }
]

export const getAllContentFromNotes = async () => {
  const response = await api.get('/api/notes')
  return {
    contents: response.body.map((note: { content: any })  => note.content),
    importants: response.body.map((note: { important: any }) => note.important),
    ids: response.body.map((note: { id: any }) => note.id),
    response
  }
}
