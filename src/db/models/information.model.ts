import {Model, DataTypes, Sequelize, Optional,NOW} from 'sequelize'
import {config} from "../../config/config"
const INFORMATION_TABLE = 'search_information'



interface InformationAttributes {
  id: number
  title: string
  photo: string
  description: string
  shortDescription: string
  createdAt?: Date
  isActive?: boolean
}
export interface InformationInput extends Optional<InformationAttributes, 'id' > {}
export interface InformationOutput extends Required<InformationAttributes> {}

const InformationSchema ={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,


    },
    photo: {
        type: DataTypes.STRING(50),
        allowNull: false,


    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false,


    },
    shortDescription: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field:'short_description'

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        default: NOW
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default:true,
        field: 'is_active'

    }


}


class Information extends Model<InformationAttributes, InformationInput> implements InformationAttributes {
    public id!: number
    public title!: string
    public photo!: string
    public description!: string
    public shortDescription!: string
    public isActive!: boolean

    // timestamps!
    public createdAt!: Date

    static associate(models: any ){

    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: INFORMATION_TABLE,
            schema: config.dbSchema,
            modelName: 'Information',
            timestamps: false
        }
    }
  }

  export  {Information, InformationSchema, INFORMATION_TABLE}