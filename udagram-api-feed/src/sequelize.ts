import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize'; // Correct import
import { config } from './config/config';

const dialect: Dialect = config.dialect as Dialect; // Ensure this is a valid Dialect

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: dialect,
  storage: ':memory:', // Only needed for SQLite
});