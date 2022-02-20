import {Op} from 'sequelize'
import {models} from "../../libs/sequelize"
import {GetInformationFilters} from "../../helpers/types"
import {Information, InformationInput} from '../models/information.model'


export const create = async (payload: InformationInput): Promise<any> => {
    const information = await models.Information.create(payload)
    return information
}

export const update = async (id: number, payload: Partial<InformationInput>): Promise<any> => {
    const information = await models.Information.findByPk(id)
    if (!information) {
        // @todo throw custom error
        return information
    }
    const updatedInformation = await (information as Information).update(payload)
    return updatedInformation
}

export const getById = async (id: number): Promise<any> => {
    const information = await models.Information.findByPk(id)
    return information
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedInformation = await getById(id)
    const partialInformation = {
        isActive: false
    }
    const updatedInformation = await (deletedInformation as Information).update(partialInformation)

    return !!updatedInformation
}

export const getAll = async (filters?: GetInformationFilters) => {
    const options = {
        where: {
            isActive: true,
            ...(filters?.title  && {title: {[Op.like]: `%${filters.title}%`}}),
        }
    }

    return models.Information.findAll(options)
}