const supertest = require('supertest')
const request = supertest('http://localhost:3001')

test('Deve responder na porta 3001', async () => {
  // Acessar a url http://localhost:3001
  const res = await request.get('/')
  // Verificar que a resposta foi 200
  expect(res.status).toBe(200)
})