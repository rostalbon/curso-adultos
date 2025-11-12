import { connection } from '../mysql/usersControllers.js'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body
  
  // Como la tabla de usuarios ya tiene que el mail sea único al intentar hacer una nueva inserción a la tabla con un mail ya puesto va a tirar un error.
  connection.query(`INSERT INTO users (name, email, passwd, progress) VALUES ('${name}', '${email}', '${password}', 0)`)
  .then(result => {
    console.log(result)
    return res.status(201).json({ message: 'New user created succesfully' })
  })
  .catch(e => {
    console.log(e)
    return res.status(200).json({ message: "Could not create user", error: e })
  })  
}

export const login = (req, res) => {
  const { email, password } = req.body

  connection.query(`SELECT name FROM users WHERE email = '${email}' AND passwd = '${password}'`)
  .then(result => res.status(200).json(result[0][0]))
  .catch(e => res.status(404).json({ message: 'No se encontró el usuario' }))
}