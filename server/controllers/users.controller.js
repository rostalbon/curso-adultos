import { connection } from '../mysql/usersControllers.js'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body
  
  // Como la tabla de usuarios ya tiene que el mail sea único al intentar hacer una nueva inserción a la tabla con un mail ya puesto va a tirar un error.
  connection.query('INSERT INTO users (name, email, passwd, progress) VALUES (?, ?, ?, 0)', [name, email, password])
  .then(result => {
    console.log(result)
    return res.status(201).json({ message: 'New user created succesfully' })
  })
  .catch(e => {
    console.log(e)
    return res.status(200).json({ message: 'Could not create user', error: e })
  })  
}

export const login = (req, res) => {
  const { email, password } = req.body

  connection.query('SELECT name, email FROM users WHERE email = ? AND passwd = ?', [email, password])
  .catch(e => res.status(500).json({ message: 'Error del servidor', error: e }))
  .then(result => {
    console.log(result[0].length)
    if (result[0].length === 0) return res.status(404).json({ message: 'No se encontró el usuario' }) 
    res.status(200).json(result[0])
  })
}

export const getProgress = (req, res) => {
  const { name } = req.params
  connection.query('SELECT progress FROM users WHERE name = ?;', [name])
  .then(result => res.status(200).json(result[0][0]))
  .catch(e => res.status(404).json({ message: 'No se encontró el usuario' }))
}

export const updateProgress = async (req, res) => {
  const { email, newProgress } = req.body

  const actualProgress = await connection.query('SELECT progress FROM users WHERE email = ?;', [email])

  if (typeof parseInt(JSON.parse(newProgress)) !== 'number') res.status(400).json({ message: 'El nuevo progreso debe ser un valor numérico' })
    
  if (parseInt(JSON.parse(newProgress)) > 100 && parseInt(JSON.parse(newProgress)) < 0) res.status(400).json({ message: 'El nuevo progreso no puede salirse del rango entre 0 y 100' })
      
  if ((actualProgress[0][0].progress) > (newProgress * 16)) {
    return res.status(400).json({ message: 'No se puede reducir el progreso' })
  } else {
    const verifyProgress = newProgress < 6 ? newProgress * 16 : 100;
    connection.query('UPDATE users SET progress = ? WHERE email = ?;', [verifyProgress, email])
    .then(result => res.status(200).json({ message: 'Se actualizó correctamente el progreso' }))
    .catch(e => res.status(500).json({ message: 'Hubo un problema inesperado', error: e }))
  }
}