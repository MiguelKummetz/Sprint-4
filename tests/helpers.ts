import supertest from 'supertest'
import { app } from '../src/backend/app'

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

export const initialUsers = [
  {
    username: "Test-user1",
    name: "TestName",
    password: "1234"
  }, {
    username: "Test-user2",
    name: "NameTest",
    password: "1234"
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

export const getAllContentFromUsers = async () => {
  const response = await api.get('/api/users')
  return {
    usernames: response.body.map((user: {username: any }) => user.username),
    names: response.body.map((user: {name: any }) => user.name),
    ids: response.body.map((note: { id: any }) => note.id),
    response
  }
}