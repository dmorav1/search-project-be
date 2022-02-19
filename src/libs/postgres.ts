import { Pool } from "pg"
import {config} from "../config/config"

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
            if (!this.connection ) {
               this.connection = new Pool(options)
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