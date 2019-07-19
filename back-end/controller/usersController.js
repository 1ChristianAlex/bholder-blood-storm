const userModel = require('../models/users');
class Bholder_User {
  async getUser(name = '') {
    let allUser = await userModel.find();
    return allUser;
  }
  async createUser(userData = {}) {
    let userCreate = await userModel.create({ ...userData });
    console.log(userCreate);
  }
}
module.exports = new Bholder_User();
