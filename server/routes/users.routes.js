import express from 'express'
import { createUser, login } from '../controllers/users.controller.js'

const router = express.Router()

router.post('/user/create-user', createUser)

router.post('/user/login', login)

export default router