import { Router } from 'express';
import UserRouter from '../routes/userRouter';

const Routes = Router();
const userRouter = new UserRouter();

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.route('/api/user/')
  .get(async (req, res, next) => {
    await userRouter.routeGetAll(req, res, next);
  })
  .put(async (req, res, next) => {
    await userRouter.routeUpdateUser(req, res, next);
  })
  .delete(async (req, res, next) => {
    await userRouter.routeDeleteUser(req, res, next);
  });

Routes.post('/login', (req, res, next) => {
  userRouter.routeLogin(req, res, next);
});
Routes.post('/user', (req, res, next) => {
  userRouter.routeCreateUser(req, res, next);
});
export default Routes;
