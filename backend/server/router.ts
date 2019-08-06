import { Router } from 'express';
import UserRouter from '../routes/userRouter';
import PostRouter from '../routes/postRouter';
import PlayerRoutes from '../routes/playerRouter';
const Routes = Router();
const userRouter = new UserRouter();
const postRouter = new PostRouter();
const playerRouter = new PlayerRoutes();

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
  })
  .put(async (req, res, next) => {
    await postRouter.updatePostRouter(req, res, next);
  })
  .delete(async (req, res, next) => {
    await postRouter.deletePostRouter(req, res, next);
  });

// Rotas para Player
Routes.route('/api/player')
  .post(async (req, res, next) => {
    await playerRouter.createPlayerRouter(req, res, next);
  })
  .put(async (req, res, next) => {
    await playerRouter.updatePlayerRouter(req, res, next);
  })
  .delete(async (req, res, next) => {
    await playerRouter.deletePlayerRouter(req, res, next);
  });
Routes.post('/login', (req, res, next) => {
  userRouter.routeLogin(req, res, next);
});
Routes.post('/user', (req, res, next) => {
  userRouter.routeCreateUser(req, res, next);
});
export default Routes;
