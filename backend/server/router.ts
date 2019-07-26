import { Router } from 'express';
import UserRouter from '../routes/userRouter';



const Routes = Router();
const userRouter = new UserRouter();

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.route('/user')
  .get((req, res, next) => {
    userRouter.routeGetAll(req, res, next);
  })
  .post((req, res, next) => {
    userRouter.routeCreateUser(req, res, next);
  })
  .put((req, res, next) => {
    userRouter.routeUpdateUser(req, res, next);
  });
Routes.post('/login', (res, req, next) => {
  userRouter.routeLogin(res, req, next);
});
export default Routes;
