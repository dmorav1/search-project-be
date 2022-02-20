import { Sequelize } from "sequelize"
import {Information, InformationSchema} from "./information.model"

function setupModels(sequelize:Sequelize ) : void {
    Information.init(InformationSchema, Information.config(sequelize))
}

export {setupModels}