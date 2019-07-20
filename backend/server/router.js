const Routes = require('express').Router();
const UserController = require('../controller/usersController');
const webToken = require('../helpers/jwt-auth');

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});
Routes.get('/user', async (req, res, next) => {
  let users = await UserController.getAllUser();
  res.json(users);
});
Routes.post('/user', async (req, res, next) => {
  try {
    let user = { ...req.body };
    console.log(user);
    let userStatus = await UserController.createUser({ ...user });
    let token = await webToken.createToken(user);
    res.json({ userStatus, token });
    next();
  } catch (error) {
    console.log(error);
  }
});

module.exports = Routes;
