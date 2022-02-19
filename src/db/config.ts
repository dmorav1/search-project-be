import { config } from  "./../config/config"

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
<<<<<<< HEAD
let URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

if (config.isProd){
    URI = config.dbUrl
}
export  = {
=======
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
>>>>>>> 360e6f1... chore: Node JS boilerplate: (#3)

  development: {
    url: URI,
    dialect: 'postgres',
    migrationStorageTableSchema: config.dbSchema
  },
  production: {
    url: URI,
    dialect: 'postgres',
<<<<<<< HEAD
    migrationStorageTableSchema: config.dbSchema,
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false
      }
    }

=======
    migrationStorageTableSchema: config.dbSchema
>>>>>>> 360e6f1... chore: Node JS boilerplate: (#3)
  }
}