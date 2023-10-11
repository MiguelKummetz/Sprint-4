import mongoose from "mongoose"
import { initialUsers, getAllContentFromUsers, api } from './helpers'
import { server } from "../src/backend/server.start"
import { User } from "../src/models/User"

beforeEach(async () => {
    await User.deleteMany({})
    for (const user of initialUsers) {
        const usersObject = new User(user)
        await usersObject.save()
    }
})

describe('testing GET', () => {
    test('users are returned as JSON', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('there are 2 users', async () => {
        const { response } = await getAllContentFromUsers()
        expect(response.body).toHaveLength(initialUsers.length)
    })

    test('cheking the name of the first user', async () => {
        const { response } = await getAllContentFromUsers()
        expect(response.body[0].name).toBe('TestName')
    })

    test('cheking if there is a specific username in one of the users', async () => {
        const { usernames } = await getAllContentFromUsers()

        expect(usernames).toContain('Test-user2')
    })
})

describe('testing POST', () => {
    test('a valid user can be added', async () => {
        const newUser = {
            username: "TestingPostUser",
            name: "POST",
            password: "1234"
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const { usernames, response } = await getAllContentFromUsers()

        expect(response.body).toHaveLength(initialUsers.length + 1)
        expect(usernames).toContain(newUser.username)
    })

    test('a user without username is not added', async () => {
        const newUser = {
            name: "POST",
            password: "1234"
        }
    
        await api
          .post('/api/user')
          .send(newUser)
          .expect(400)
    
        const { response } = await getAllContentFromUsers()
    
        expect(response.body).toHaveLength(initialUsers.length)
      })
})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})
