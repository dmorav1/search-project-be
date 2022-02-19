import {Sequelize} from "sequelize"
import {config} from "../config/config"
import {setupModels} from "../db/models"


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
<<<<<<< HEAD
let URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

if (config.isProd){
    URI = config.dbUrl
}
const options: any = {
    dialect: 'postgres',
    logging: !config.isProd,
    schema: config.dbSchema

}
if (config.isProd){
    options.dialectOptions =  {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const sequelize= new Sequelize( URI,
    options)

setupModels(sequelize)

// sequelize.sync({force: false})

export =sequelize
=======
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const sequelize= new Sequelize( URI,
    {
    dialect: 'postgres',
    logging: true,
    schema: config.dbSchema
})

setupModels(sequelize)

sequelize.sync({force: false})

export {sequelize}
>>>>>>> 360e6f1... chore: Node JS boilerplate: (#3)
