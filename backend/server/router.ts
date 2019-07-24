import { Router } from 'express';
import UserController from '../controller/usersController';
const Routes = Router();

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.get('/user', UserController.routeGetAll);

Routes.post('/user', UserController.routeCreateUser);

export default Routes;
