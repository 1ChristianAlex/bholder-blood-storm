import config from './local';
module.exports = {
  username: config.DB_USER,
  password: config.DB_PW,
  database: config.DB_NAME,
  host: config.HOSTNAME,
  dialect: 'mysql'
};
