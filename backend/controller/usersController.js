const userModel = require('../models/users');

class UserController {
  async getAllUser() {
    let allUser = await userModel.find();
    return allUser;
  }
  async createUser(userData = {}) {
    let userCreate = await userModel.create({ ...userData });
    console.log(userData);
    return userCreate;
  }
}
module.exports = new UserController();
