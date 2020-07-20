import request from 'supertest'

import app from '../src/app'

test('Deve responder na raiz', async () => {
  const res = await request(app).get('/')

  expect(res.status).toBe(200)
})
