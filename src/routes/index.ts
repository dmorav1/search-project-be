
import express from 'express'

function routerApi(app: express.Application) {
    const router = express.Router()
    app.use('/api', router)

}


export default routerApi
