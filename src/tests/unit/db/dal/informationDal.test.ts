// import InformationService from "../../../../services/information.service"
import { GetInformationFilters } from "../../../../helpers/types"
import {getAll as informationDalGetAll,
        getById as informationDalGetById} from "../../../../db/dal/information"
import {models} from "../../../../libs/sequelize"
import { Op } from "sequelize"
jest.mock("../../../../libs/sequelize", ()=> (
    {
        models:{
            Information: {
                findAll: jest.fn(),
                findByPk: jest.fn(
                    (id:number) => {
                    const information = [{id: 3,
                           title: "Cat Image 3",
                           photo: "https://thiscatdoesnotexist.com/",
                           description: "This is a demo of the information page",
                           shortDescription: "This is a demo of the information page",
                           createdAt: "2020-05-06T18:00:00.000Z",
                           isActive: true}]
                   return information.filter(info => info.id === id && info.isActive===true)[0]
               })
            }
        }
    }
))


describe('Information Data Layer Access', () => {
    afterAll(() => {

    })


    // const modelsInfoFindAllSpy = jest.spyOn(models.Information, 'findAll')
    describe('getAll', () => {
        const options = {

            where: {
                isActive: true,
            }
        }
        const optionsWithTitle = {
            where: {
                isActive: true,
                title: {
                    [Op.like]: "%test%"
                }
            }
        }
        it('should accept parameters without title filtering', async () => {
            await informationDalGetAll();

            expect(models.Information.findAll).toBeCalledTimes(1)
            expect(models.Information.findAll).toHaveBeenCalledWith(options)


        })
        it('should accept parameters with title filtering', async () => {
            await informationDalGetAll({title: 'test'})

            expect(models.Information.findAll).toBeCalledTimes(2)
            expect(models.Information.findAll).toHaveBeenCalledWith(optionsWithTitle)
        })
    })
    describe('getById', () => {

        it('should accept a number and ask to db',  async () => {
            await informationDalGetById(3);
            expect(models.Information.findByPk).toBeCalledTimes(1)
            expect(models.Information.findByPk).toHaveBeenCalledWith(3)





        })
        it ('should return undefined when id is not found in db', async() => {

            await informationDalGetById(4)
            expect(models.Information.findByPk).toBeCalledTimes(2)
            expect(models.Information.findByPk).toHaveReturnedWith(undefined)

        })

    })
})
