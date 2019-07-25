import { IUser, IUserToken, ILogin } from '../@types/IUser';
import userModel from '../models/users';
import Cryptfy from '../helpers/Crypto';
import Token from '../helpers/JsonWebToken';

export default class UserController {
  private userModel = userModel;
  private Crypt = Cryptfy;
  private jwt = Token;

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
  public async login(user: ILogin) {
    try {
      let { userName, pass, email } = user;
      let cryptPass = await this.Crypt(pass);
      let userLogin = await this.userModel.findOne({
        userName,
        pass: cryptPass,
        email
      });
      if (userLogin !== null) {
        let fullUserData: IUser = userLogin.toJSON();
        let myUser: IUser = {
          _id: fullUserData._id,
          userName: fullUserData.userName,
          name: fullUserData.name,
          lastName: fullUserData.lastName,
          email: fullUserData.email
        };
        let token = await this.jwt.createToken(myUser);
        return {
          token,
          myUser
        };
      }
      return userLogin;
    } catch (error) {
      console.log(error);
    }
  }
  public async updateUser(user: IUserToken) {
    let veriryToken = await this.jwt.verifyToken(user.token);
    if (typeof veriryToken != 'string' || typeof veriryToken != 'object') return;

    let updateUser = await this.userModel.findByIdAndUpdate(user.myUser._id, { ...user.myUser });
    console.log(updateUser);
    return updateUser;
  }
}
