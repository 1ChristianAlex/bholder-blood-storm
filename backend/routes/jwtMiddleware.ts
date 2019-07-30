import { Request, Response, NextFunction } from 'express';
import jwt from '../helpers/JsonWebToken';

const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let jwToken = req.headers['bholder-access-token'];
  let body = req.body;
  let isAuth = await jwt.verifyToken(jwToken);
  if (isAuth == null) {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
  } else {
    req.body = {
      user: isAuth,
      ...body
    };
    next();
  }
};
export default jwtMiddleware;
