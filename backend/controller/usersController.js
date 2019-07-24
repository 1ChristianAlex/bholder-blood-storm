const userModel = require('../models/users');
const crypto = require('crypto');
const { SECRET } = require('../config/local');

class UserController {
  constructor() {
    this.userModel = userModel;
    this.SECRET = SECRET;
    this.crypto = crypto;
  }
  async cryptoPass(pass) {
    return this.crypto.scryptSync(pass, this.SECRET, 32);
  }
  async getAllUser() {
    let allUser = await this.userModel.find();
    return allUser;
  }
  async newUser(userData) {
    console.log('teste');
    let { pass } = userData;
    let cryptoPass = this.cryptoPass(pass);
    let userCreate = await this.userModel.create({ ...userData, pass: cryptoPass });

    return userCreate;
  }
  async login(user) {
    let userMatch = await this.userModel.findOne({
      ...user
    });
  }
  async routeCreateUser(req, res, next) {
    try {
      let user = { ...req.body };
      console.log(req.body);
      let userStatus = await this.newUser(user);

      res.json({ mensage: 'User created sucess', userData: userStatus });
      next();
    } catch (error) {
      console.log(error);
    }
  }
  async routeGetAll(req, res, next) {
    let allUser = await this.getAllUser();
    res.json(allUser);
    next();
  }
}
module.exports = new UserController();
