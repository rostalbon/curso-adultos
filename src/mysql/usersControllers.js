import { config } from './config.js'
import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection(config)