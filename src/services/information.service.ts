import {models} from "./../libs/sequelize"
import {InformationInput} from "../db/models/information.model"
import * as informationDal from '../db/dal/information'
import { GetInformationFilters } from "../helpers/types"


class InformationService {


    constructor(){

      }

      async create(data: InformationInput) {

          const newInformation = await informationDal.create(data)
          return newInformation

      }

      async find(filters?: GetInformationFilters) {


        const allInformation= await informationDal.getAll(filters)

        return allInformation

      }

      async findById(id: number) {

        const information = await informationDal.getById(id)
        if (!information) {
          throw new Error('information not found')
        }

        return information
      }
}

export = InformationService