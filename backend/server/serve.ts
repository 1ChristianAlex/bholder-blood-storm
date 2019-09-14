import express from 'express';
import bodyParser from 'body-parser';
import Routes from './router';
import cors from 'cors';
import jwtMiddleware from '../routes/jwtMiddleware';
import { sequelize } from '../config/database';

class Server {
  public express: express.Application;
  constructor() {
    this.init();
  }

  private dataBase() {
    sequelize.sync();
  }
  private midllewere() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.express.use('/api/', jwtMiddleware);
    this.express.use(Routes);
  }
  private init() {
    this.dataBase();
    this.express = express();
    this.midllewere();
  }
}

export default new Server().express;
