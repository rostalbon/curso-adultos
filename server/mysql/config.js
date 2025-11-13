process.loadEnvFile('.env')

export const config = {
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  port: process.env.PORT_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB
}