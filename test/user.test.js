import request from 'supertest'

import app from '../src/app'

test('Deve listar os os usuários', async () => {
  const res = await request(app).get('/users')

  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
  expect(res.body[0]).toHaveProperty('name', 'John Doe')
})
