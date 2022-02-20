import { config } from  "./../config/config"

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
let URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

if (config.isProd){
    URI = config.dbUrl
}
export  = {


  development: {
    url: URI,
    dialect: 'postgres',
    migrationStorageTableSchema: config.dbSchema
  },
  production: {
    url: URI,
    dialect: 'postgres',
    migrationStorageTableSchema: config.dbSchema,
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false
      }
    }


  }
}