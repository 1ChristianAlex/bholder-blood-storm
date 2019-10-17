import { Router } from 'express';
import UserRouter from '../app/routes/User/userRouter';
import PostRouter from '../app/routes/Posts/postRouter';
import PlayerRoutes from '../app/routes/Player/playerRouter';

const Routes = Router();
const userRouter = new UserRouter();
const postRouter = new PostRouter();
const playerRouter = new PlayerRoutes();

const userRouterPath = '/api/user/:id?';
const postRouterPath = '/api/post/:id?';
const playerRouterPath = '/api/player/:id?';

// Router for opening request

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.post('/login', (req, res, next) => {
  userRouter.Login(req, res, next);
});
Routes.post('/register', (req, res, next) => {
  userRouter.Createuser(req, res, next);
});

Routes.route('/post').get(async (req, res, next) => {
  await postRouter.ListPost(req, res, next);
});

// Routes close, require Token

//  User routes
Routes.route(userRouterPath)
  .get(async (req, res, next) => {
    await userRouter.GetAll(req, res, next);
  })
  .put(async (req, res, next) => {
    await userRouter.UpdateUser(req, res, next);
  })
  .delete(async (req, res, next) => {
    await userRouter.DeleteUser(req, res, next);
  });

// Post routes
Routes.route(postRouterPath)
  .post(async (req, res, next) => {
    await postRouter.CreatePost(req, res, next);
  })
  .get(async (req, res, next) => {
    await postRouter.ListPost(req, res, next);
  })
  .put(async (req, res, next) => {
    await postRouter.UpdatePost(req, res, next);
  })
  .delete(async (req, res, next) => {
    await postRouter.DeletePost(req, res, next);
  });

// Player Routes
Routes.route(playerRouterPath)
  .get(async (req, res, next) => {
    await playerRouter.GetPlayer(req, res, next);
  })
  .post(async (req, res, next) => {
    await playerRouter.CreatePlayer(req, res, next);
  })
  .put(async (req, res, next) => {
    await playerRouter.UpdatePlayer(req, res, next);
  })
  .delete(async (req, res, next) => {
    await playerRouter.DeletePlayer(req, res, next);
  });

export default Routes;
