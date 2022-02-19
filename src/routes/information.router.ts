import express from "express"
import { GetInformationFilters } from "../helpers/types"

const informationRouter = express.Router()
import InformationService from "../services/information.service"

const informationService = new InformationService()

informationRouter.get('/', async (req, res,next) => {
    try{


      const filter: GetInformationFilters ={}

      if (req.query.title) {
        const title = String(req.query.title)
        filter.title = title
        // information = await informationService.find(filter)
    }


        const information = await informationService.find(filter)

      res.json(information)

    }catch(error){
      next(error)
    }



  }),
  informationRouter.get('/:id', async (req, res,next) => {
    try{

        const id = Number(req.params.id)

        const information = await informationService.findById(id)

        res.json(information)

    }catch(error){
      next(error)
    }



  })


export default informationRouter