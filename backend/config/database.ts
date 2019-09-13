import config from './local';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  username: config.DB_USER,
  password: config.DB_PW,
  database: config.DB_NAME,
  host: config.HOSTNAME,
  dialect: 'mysql'
});
