import { Request, Response, NextFunction } from 'express';
import jwt from '../helpers/JsonWebToken';
import { IUserToken } from '../@types/IUser';

const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let jwToken = req.headers['bholder-access-token'];
  let isAuth = await jwt.verifyToken(jwToken);

  if (isAuth == null) {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
    next();
  } else {
    let userToken: IUserToken = JSON.parse(isAuth.toString());
    req.body.user = userToken;
  }
};
export default jwtMiddleware;
