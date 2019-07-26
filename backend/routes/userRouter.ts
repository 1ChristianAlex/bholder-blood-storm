import { IUser, ILogin, IUserToken } from '../@types/IUser';
import { NextFunction, Request, Response } from 'express';
import UserController from '../controller/usersController';
import Token from '../helpers/JsonWebToken';


export default class UserRouter {
  private UserC: UserController;
  private jwt = Token;

  constructor() {
    this.UserC = new UserController();
  }
  public async routeCreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      let user: IUser = req.body;
      let userResult = await this.UserC.newUser(user);
      res.json({ mensage: 'User created sucess', userResult: userResult });
      next();
    } catch (error) {
      console.log(error);
    }
  }
  public async routeGetAll(req: Request, res: Response, next: NextFunction) {
    let allUser = await this.UserC.getAllUser();
    res.json(allUser);
    next();
  }
  public async routeLogin(req: Request, res: Response, next: NextFunction) {
    let userLogin: ILogin = req.body;
    let userLoged = await this.UserC.login(userLogin);
    if (userLoged == null) {
      res.status(404).json({ mensage: 'User not found' });
    } else {
      res.json(userLoged);
    }
    next();
  }
  public async routeUpdateUser(req: Request, res: Response, next: NextFunction) {
    
    let userToken:IUserToken = req.body;
    let veriryToken = await this.jwt.verifyToken(userToken.token);
    let result = await this.UserC.updateUser(userToken);
    res.json(result);
    next();
  }
  public async routeDeleteUser(req: Request, res: Response, next: NextFunction) {
    let userToken = req.body;
    
    res.json(result);
    next();
  }
}
