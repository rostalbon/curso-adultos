import express from 'express'
import { PORT } from './config.js'
import path from 'node:path'
import users from './routes/users.routes.js'

const dirname = path.resolve()
const app = express()

app.use(express.json())
app.disable('X-Powered-By')
app.use(express.static(path.join(dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'src/pages/index.html'))
})

app.get('/vista-previa', (req, res) => {
  res.sendFile(path.join(dirname, 'src/pages/vista-previa.html'))
})

app.get('/curso', (req, res) => {
  res.sendFile(path.join(dirname, 'src/pages/curso.html'))
})

app.use(users)

app.on('error', (error) => console.error('Server error', error))

export default (req, res) => app(req, res);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})