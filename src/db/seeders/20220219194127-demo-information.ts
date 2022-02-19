'use strict';

import seed_data from "../data/seed_data.json";

import {INFORMATION_TABLE} from "../models/information.model"
import {config} from "../../config/config"

import { QueryInterface, DataTypes, QueryTypes, QueryInterfaceCreateTableOptions } from 'sequelize'
const options = {schema: config.dbSchema} as QueryInterfaceCreateTableOptions

module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert({tableName: INFORMATION_TABLE, schema: config.dbSchema},
      seed_data.demo_information,
      options)
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete({tableName: INFORMATION_TABLE, schema: config.dbSchema},
      null,
      options)
  }
};
