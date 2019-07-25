import { IUser } from '../../@types/IUser';
import { NextFunction, Request, Response } from 'express';
import UserController from '../../controller/usersController';

export default class UserRouter extends UserController {
  constructor() {
    super();
  }
  public async routeCreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      let user: IUser = req.body;
      let userResult = await this.newUser(user);
      res.json({ mensage: 'User created sucess', userResult: userResult });
      next();
    } catch (error) {
      console.log(error);
    }
  }
  public async routeGetAll(req: Request, res: Response, next: NextFunction) {
    let allUser = await this.getAllUser();
    res.json(allUser);
    next();
  }
}
