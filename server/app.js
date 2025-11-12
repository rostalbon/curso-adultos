import express from 'express'
import { PORT } from './config.js'
import { connection } from './mysql/usersControllers.js'
import path from 'node:path'
import users from './routes/users.routes.js'

const dirname = path.resolve()
const pJoin = (otherPath) => path.join(dirname, otherPath)
const app = express()
// const result = connection.query('SELECT * FROM users')
// .then(result => {
//   res.send(result)
//   console.log(result)
// })
// .catch(e => console.log(`Hubo un error: ${e}`))

app.use(express.json())
app.disable('X-Powered-By')
app.use(express.static(pJoin('client/src/styles')))
app.use(express.static(pJoin('client/src/javascript')))

app.get('/', (req, res) => {
  res.sendFile(pJoin('client/src/pages/index.html'))
})

app.get('/vista-previa', (req, res) => {
  res.sendFile(pJoin('client/src/pages/vista-previa.html'))
})

app.get('/curso', (req, res) => {
  res.sendFile(pJoin('client/src/pages/curso.html'))
})

app.use(users)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})