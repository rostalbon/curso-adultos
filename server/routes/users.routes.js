import express from 'express'
import { createUser, login, getProgress, updateProgress } from '../controllers/users.controller.js'

const router = express.Router()

router.post('/user/create-user', createUser)

router.post('/user/login', login)

router.get('/user/get-progress/:name', getProgress)

router.post('/user/update-progress', updateProgress)

export default router