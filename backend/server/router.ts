import { Router } from 'express';
import UserRouter from '../routes/userRouter';
import PostRouter from '../routes/postRouter';
const Routes = Router();
const userRouter = new UserRouter();
const postRouter = new PostRouter();

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});
// Rotas para usuário
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
// Rotas para Postagens
Routes.route('/api/post')
  .post(async (req, res, next) => {
    await postRouter.createPostRouter(req, res, next);
  })
  .get(async (req, res, next) => {
    await postRouter.listPostRouter(req, res, next);
  });

Routes.post('/login', (req, res, next) => {
  userRouter.routeLogin(req, res, next);
});
Routes.post('/user', (req, res, next) => {
  userRouter.routeCreateUser(req, res, next);
});
export default Routes;
