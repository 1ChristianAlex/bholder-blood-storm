const Routes = require('express').Router();
const Bholder_User = require('./controller/usersController');
const webToken = require('./classes/jwt-auth');
Routes.get('/', (req, res, next) => {
  res.json({ mensage: 'Hello world' });
});
Routes.get('/user', async (req, res, next) => {
  let users = await Bholder_User.getUser();
  res.json(users);
});
Routes.post('/user', async (req, res, next) => {
  try {
    let user = { ...req.body };
    console.log(user);
    let userStatus = await Bholder_User.createUser(user);
    let { name, pass, email } = user;
    let token = await webToken.createToken({ name, pass, email });
    res.json({ userStatus, token });
    next();
  } catch (error) {
    console.log(error);
  }
});

module.exports = Routes;
