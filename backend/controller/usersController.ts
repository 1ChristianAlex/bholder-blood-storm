import { IUser, IUserToken, ILogin } from '../@types/IUser';
import { User } from '../app/models/user';
import Cryptfy from '../helpers/Crypto';
import jwt from '../helpers/JsonWebToken';

export default class UserController {
  private userModel = User;
  private Crypt = Cryptfy;
  private jwt = jwt;

  public async getAllUser() {
    let allUser = await this.userModel.findAll();
    return allUser;
  }

  public async newUser(userData: IUser) {
    try {
      let { pass } = userData;
      let cryptoPass = await this.Crypt(pass);

      let userCreate = await this.userModel.create({ ...userData, pass: cryptoPass.toString(), createDate: Date.now() });
      return userCreate;
    } catch (error) {
      return null;
    }
  }
  public async login(user: ILogin) {
    try {
      let { userName, pass, email } = user;
      let cryptPass = await this.Crypt(pass);
      let userLogin = await this.userModel.findOne().toJSON();
      if (userLogin !== null) {
        let fullUserData: any = userLogin;
        let myUser: IUser = {
          _id: fullUserData._id,
          userName: fullUserData.userName,
          name: fullUserData.name,
          email: fullUserData.email
        };
        let token = await this.jwt.createToken(myUser);
        return {
          token
        };
      }
      return userLogin;
    } catch (error) {
      console.log(error);
    }
  }
  public async updateUser(user: IUser, newUser: IUser) {
    try {
      let updateUser = await this.userModel.findByPk(user._id);
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }
  public async deleteUser(_id) {
    let userDeleted = await this.userModel.findByPk(_id);
    return { mensage: `Usuário ${userDeleted} deletado`, status: 'Success' };
  }
}
