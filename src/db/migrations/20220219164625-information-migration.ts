'use strict'
import {config} from "../../config/config"
import {InformationSchema, INFORMATION_TABLE} from "../models/information.model"
import { QueryInterface, DataTypes, QueryTypes, QueryInterfaceCreateTableOptions } from 'sequelize'
const options = {schema: config.dbSchema} as QueryInterfaceCreateTableOptions
module.exports = {

  async up (queryInterface: QueryInterface) {

    await queryInterface.createTable(INFORMATION_TABLE, InformationSchema, options)
    await queryInterface.sequelize.query('ALTER TABLE IF EXISTS ' + config.dbSchema + '.' + INFORMATION_TABLE + ' ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP')
    await queryInterface.sequelize.query('ALTER TABLE IF EXISTS ' + config.dbSchema + '.' + INFORMATION_TABLE + ' ALTER COLUMN is_active SET DEFAULT true')

  },


  async down (queryInterface: QueryInterface) {

    await queryInterface.dropTable(INFORMATION_TABLE, options)
  }
}
