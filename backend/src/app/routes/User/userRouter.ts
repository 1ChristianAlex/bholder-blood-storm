import { IUser, ILogin } from '../../interfaces/IUser';
import { NextFunction, Request, Response } from 'express';
import UserController from '../../controller/User/usersController';

export default class UserRouter {
  private UserController: UserController;

  constructor() {
    this.UserController = new UserController();
  }

  public async Createuser(req: Request, res: Response, next: NextFunction) {
    try {
      let user: IUser = req.body;

      let userCreateResult = await this.UserController.CreateUser(user);

      if (userCreateResult !== null) {
        res.json({ mensage: 'User created sucess', userCreateResult: userCreateResult });
      } else {
        res.status(404).json({ mensage: 'Erro on user creation' });
      }

      next();
    } catch (error) {
      console.log(error);
    }
  }

  public async GetAll(req: Request, res: Response, next: NextFunction) {
    let allUser = await this.UserController.GetAll();

    res.json(allUser);
    next();
  }

  public async Login(req: Request, res: Response, next: NextFunction) {
    let userLoginAccess: ILogin = req.body;

    let userLoged = await this.UserController.Login(userLoginAccess);

    if (userLoged == null) {
      res.status(404).json({ mensage: 'User not found' });
    } else {
      res.json(userLoged);
    }

    next();
  }

  public async UpdateUser(req: Request, res: Response, next: NextFunction) {
    let userToken: IUser = req.body.user;
    let newUser = req.body.newUser;

    let resultUpdate = await this.UserController.UpdateUser(userToken, newUser);

    res.json(resultUpdate);
    next();
  }

  public async DeleteUser(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;

    let resultDetete = await this.UserController.DeleteUser(userId);

    res.status(resultDetete.status).json(resultDetete);
    next();
  }
}
