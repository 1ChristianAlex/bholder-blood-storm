import { Router } from 'express';
import UserRouter from './routes/userRouter';
const Routes = Router();
const userRouter = new UserRouter();
Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.get('/user', userRouter.routeGetAll);

Routes.post('/user', userRouter.routeCreateUser);

export default Routes;
