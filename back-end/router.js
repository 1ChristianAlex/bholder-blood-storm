const Routes = require('express').Router();
const Bholder_User = require('./controller/usersController');

Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});
Routes.get('/user', async (req, res, next) => {
  let users = await Bholder_User.getUser();
  res.json(users);
});
Routes.post('/user', async (req, res, next) => {
  let user = { ...req.body };
  let userStatus = await Bholder_User.createUser(user);
  res.json(userStatus);
  next();
});
module.exports = Routes;
