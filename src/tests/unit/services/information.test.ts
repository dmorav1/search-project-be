import InformationService from "../../../services/information.service"
// import { GetInformationFilters } from "../../../helpers/types"
import {getAll as informationDalGetAll,
        getById as informationDalGetById} from "../../../db/dal/information"
// import {models} from "../../../libs/sequelize"
// import { Op } from "sequelize"
jest.mock("../../../db/dal/information", ()=> (
    {
        getAll: jest.fn(),
        getById: jest.fn(
            (id:number) => {
             const information = [{id: 3,
                    title: "Cat Image 3",
                    photo: "https://thiscatdoesnotexist.com/",
                    description: "This is a demo of the information page",
                    shortDescription: "This is a demo of the information page",
                    createdAt: "2020-05-06T18:00:00.000Z",
                    isActive: true}]
            return information.filter(info => info.id === id && info.isActive===true)[0]
        }
        )
    }
))

describe('Information Service', () => {
    afterAll(() => {

    })

    const informationService = new InformationService()

    describe('GetAll', () => {

        it('should accept a payload without the title filter', async () => {
            await informationService.find();

            expect(informationDalGetAll).toBeCalledTimes(1)
            expect(informationDalGetAll).toHaveBeenCalledWith(undefined)


        })
        it('should accept a payload with the title filter', async () => {
            await informationService.find({title: 'test'})

            expect(informationDalGetAll).toBeCalledTimes(2)
            expect(informationDalGetAll).toHaveBeenCalledWith({title: 'test'})
        })
    })
    describe ('GetById', () => {
        it('should accept a number and ask to dal',  async () => {
            await informationService.findById(3);
            expect(informationDalGetById).toBeCalledTimes(1)
            expect(informationDalGetById).toHaveBeenCalledWith(3)





        })
        it ('should throw an error when id is not found by dal', async() => {
            try {
                await informationService.findById(4)
             }
                catch (error) {
                    expect(error.message).toEqual('information not found')
                }
         } )
    })
})
