import express from 'express';
import envolvriment from '../config/local';
import bodyParser from 'body-parser';
import Routes from './router';
import cors from 'cors';
import jwtMiddleware from '../routes/jwtMiddleware';
import { Sequelize } from 'sequelize';

class Server {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.midllewere();
    this.dataBase();
  }

  private dataBase() {
    const sequelize = new Sequelize({
      dialect: 'mysql',
      username: envolvriment.DB_USER,
      password: envolvriment.DB_PW,
      database: envolvriment.DB_NAME
    });
    return sequelize.authenticate().then(() => {
      console.log('My SQL Connects');
    });
  }
  private midllewere() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.express.use('/api/', jwtMiddleware);
    this.express.use(Routes);
  }
}

export default new Server().express;
