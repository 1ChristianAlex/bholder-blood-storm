import express from 'express';
import bodyParser from 'body-parser';
import Routes from './router';
import cors from 'cors';
import jwtMiddleware from '../app/middleware/jwtMiddleware';
import { sequelize } from '../config/database';

class Server {
  public Express: express.Application;
  private APIPath = '/api/';

  constructor() {
    this.Init();
  }

  private DataBase() {
    sequelize.sync();
  }

  private Midllewere() {
    this.Express.use(bodyParser.urlencoded({ extended: true }));
    this.Express.use(bodyParser.json());
    this.Express.use(cors());
    this.Express.use(this.APIPath, jwtMiddleware);
    this.Express.use(Routes);
  }

  private Init() {
    this.DataBase();
    this.Express = express();
    this.Midllewere();
  }
}

export default new Server().Express;
