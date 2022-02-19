import  express from "express"


import  cors from "cors"
import { dataReviver } from "./helpers/utils"


import { logErrors, errorHandler } from "./middlewares/error.handler"
import routerApi from "./routes"
import {config} from "./config/config"
import helmet from "helmet"



const app = express()
const port = config.port


app.use(express.json({reviver:dataReviver}))
app.use(cors())

routerApi(app)


app.use(logErrors)
app.use(errorHandler)

app.use(helmet.xssFilter())

app.listen(port, () => {
  console.log('App listening on port: ' +  port)
})
