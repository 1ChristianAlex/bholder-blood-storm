import { IUser, IUserToken } from '../@types/IUser';
import userModel from '../models/users';
import Cryptfy from '../helpers/Crypto';

export default class UserController {
  private userModel = userModel;
  private Crypt = Cryptfy;
  constructor() {}

  public async getAllUser() {
    let allUser = await this.userModel.find();
    return allUser;
  }
  public async newUser(userData: IUser) {
    try {
      let { pass } = userData;
      let cryptoPass = await this.Crypt(pass);

      let userCreate = await this.userModel.create({ ...userData, pass: cryptoPass.toString(), createDate: Date.now() });
      return userCreate;
    } catch (error) {
      console.log(error);
    }
  }
  public async login(user: IUser) {
    let { userName, pass, email } = user;
    let cryptPass = this.Crypt(pass);
    let userMatch = await this.userModel.findOne({
      userName,
      pass: cryptPass,
      email
    });
  }
}
