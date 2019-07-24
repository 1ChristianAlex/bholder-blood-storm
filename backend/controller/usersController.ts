import { IUser, IUserToken } from '../@types/IUser';
import userModel from '../models/users';
import crypto from 'crypto';
import envolvriment from '../config/local';

export default class UserController {
  private userModel = userModel;
  private SECRET = envolvriment.SECRET;
  private crypto = crypto;

  private async cryptoPass(pass) {
    return this.crypto.scryptSync(pass, this.SECRET, 32);
  }
  public async getAllUser() {
    let allUser = await this.userModel.find();
    return allUser;
  }
  public async newUser(userData: IUser) {
    try {
      console.log(userData);
      let { pass } = userData;
      let cryptoPass = await this.cryptoPass(pass);
      let userCreate = await this.userModel.create({ ...userData, pass: cryptoPass.toString(), createDate: new Date().getDate() });

      return userCreate;
    } catch (error) {
      console.log(error);
    }
  }
  public async login(user: IUser) {
    let userMatch = await this.userModel.findOne({
      ...user
    });
  }
}
