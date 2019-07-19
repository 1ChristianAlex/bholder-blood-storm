require('dotenv').config({ path: 'backend/config/.env' });

const envolvriment = {
  MONGOPORT: process.env.DB_PORT,
  FRONTPORT: process.env.FRONT_PORT,
  BACK_END_PORT: process.env.BACK_END_PORT,
  HOSTNAME: process.env.HOSTNAME,
  DB_USER: process.env.DB_USER,
  DB_PW: process.env.DB_PW,
  DB_NAME: process.env.DB_NAME
};

module.exports = envolvriment;
