import express from 'express';
import envolvriment from '../config/local';
import bodyParser from 'body-parser';
import Routes from './router';
import mongoose from 'mongoose';
import cors from 'cors';
import jwtMiddleware from '../routes/jwtMiddleware';

class Server {
  constructor() {
    this.midllewere();
    this.dataBase();
  }
  public express = express();

  private dataBase() {
    mongoose.connect(`mongodb://${envolvriment.HOSTNAME}:${envolvriment.MONGOPORT}/${envolvriment.DB_NAME}`, {
      useNewUrlParser: true,
      user: envolvriment.DB_USER,
      pass: envolvriment.DB_PW
    });
  }
  private midllewere() {
    Routes.use(bodyParser.json());
    Routes.use(express.json());
    Routes.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    //this.express.use('/api', jwtMiddleware);
    this.express.use(Routes);
  }
}

export default new Server().express;
