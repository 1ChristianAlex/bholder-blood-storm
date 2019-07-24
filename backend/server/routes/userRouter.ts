import { IUser } from '../../@types/IUser';
import { NextFunction, Request, Response } from 'express';
import UserController from '../../controller/usersController';

export default class UserRouter {
  private userController = new UserController();
  constructor() {
    this.userController = this.userController;
  }

  public async routeCreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      //   let user: IUser = req.body;
      //   let userResult = this.userController.newUser(user);
      //   res.json({ mensage: 'User created sucess', userResult: userResult });
      //   next();
    } catch (error) {
      console.log(error);
    }
  }
  public async routeGetAll(req: Request, res: Response, next: NextFunction) {
    let allUser = await this.userController.getAllUser();
    res.json(allUser);
    next();
  }
}
