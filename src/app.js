import express from 'express'
import consign from 'consign'

const app = express()

consign({ cwd: 'src' })
  .include('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
})

export default app
