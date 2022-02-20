
import express from 'express'
import informationRouter from "./information.router"

function routerApi(app: express.Application) {
    const router = express.Router()
    app.use('/api', router)
    router.use('/information', informationRouter)
}


export default routerApi
