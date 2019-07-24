const Routes = require('express').Router();
const UserController = require('../controller/usersController');

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});

Routes.get('/user', UserController.routeGetAll);

Routes.post('/user', UserController.routeCreateUser);

module.exports = Routes;
