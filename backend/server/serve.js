const express = require('express');
const envolvriment = require('../config/local');
const bodyParser = require('body-parser');
const Routes = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

class Server {
  constructor() {
    this.express = express();
    this.midllewere();
    this.dataBase();
  }
  dataBase() {
    mongoose.connect(`mongodb://${envolvriment.HOSTNAME}:${envolvriment.MONGOPORT}/${envolvriment.DB_NAME}`, {
      useNewUrlParser: true,
      user: envolvriment.DB_USER,
      pass: envolvriment.DB_PW
    });
  }
  midllewere() {
    this.express.use(express.json());
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.express.use(Routes);
  }
}

module.exports = new Server().express;
