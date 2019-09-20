import { Request, Response, NextFunction } from 'express';
import JsonWebToken from '../helpers/JsonWebToken';

const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let jwTokenReponse = req.headers['bholder-access-token'];
  let bodyResponse = req.body;

  let isAuth = await JsonWebToken.Verify(jwTokenReponse);

  if (isAuth == null) {
    res.status(401).json({ mensage: 'Invalid token, please loged again' });
  } else {
    req.body = {
      user: isAuth,
      ...bodyResponse
    };
    next();
  }
};
export default jwtMiddleware;
