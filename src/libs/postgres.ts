import { Pool } from "pg"
import {config} from "../config/config"

<<<<<<< HEAD
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
let URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

if (config.isProd){
    URI = config.dbUrl
}
const options: any = {

    connectionString: URI


}
if (config.isProd){
    options.ssl = {
        rejectUnauthorized: false
    }
}
=======
// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

>>>>>>> 360e6f1... chore: Node JS boilerplate: (#3)
class Postgres {
    connection: Pool

    constructor(){

    }


    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */


     async getConnection() {

        try {
<<<<<<< HEAD
            if (!this.connection ) {
               this.connection = new Pool(options)
=======
            if (!this.connection) {
               this.connection = new Pool(
                   {
                        host: config.dbHost,
                        user: config.dbUser,
                        password: config.dbPassword,
                        database: config.dbName,
                        max: config.dbMaxConnections,
                        idleTimeoutMillis: config.dbIdleTimeoutMillis,
                        connectionTimeoutMillis: config.dbConnectionTimeoutMillis
                   }

                )
>>>>>>> 360e6f1... chore: Node JS boilerplate: (#3)
                console.log('Connected succesfully')
            }
            return this.connection
        } catch (error) {
            console.log(error)
        }
    }

     /**
     * @description query process in table
     * @param {string} request - SQL string request
     * @returns {Object} - response query postgresDB
     */
      async query(request : string, values: any[] = []) : Promise<any> {
        try {
            const connection = await this.getConnection()
            const client= await connection.connect()

            const response= await client.query(request,values)

            client.release()
            return await response// Security Problem as we shouldn't allow customer to send SQL query to DB directly
        } catch (error) {
            console.log(error)
        }
    }


}

export {Postgres}