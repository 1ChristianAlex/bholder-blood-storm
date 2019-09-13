import { IUser, IUserToken, ILogin } from '../@types/IUser';
import { User } from '../app/models/user';
import { Teste } from '../app/models/teste';

import Cryptfy from '../helpers/Crypto';
import jwt from '../helpers/JsonWebToken';

export default class UserController {
  private Crypt = Cryptfy;
  private jwt = jwt;

  public async getAllUser() {
    let allUser = await User.findAll();
    return allUser;
  }
  public async teste(userData: IUser) {
    try {
      let userCreate = await Teste.findAll().then(item => {
        console.log(item);
      });
      return userCreate;
    } catch (error) {
      return null;
    }
  }
  public async newUser(userData: IUser) {
    try {
      let { pass } = userData;
      let cryptoPass = await this.Crypt(pass);

      let userCreate = await User.create({ ...userData, password: cryptoPass.toString(), createdAt: Date.now(), updatedAt: 'Date.now()' });
      return userCreate;
    } catch (error) {
      return null;
    }
  }
  public async login(user: ILogin) {
    try {
      let { userName, pass, email } = user;
      let cryptPass = await this.Crypt(pass);
      let userLogin = await User.findOne().toJSON();
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
      let updateUser = await User.findByPk(user._id);
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }
  public async deleteUser(_id) {
    let userDeleted = await User.findByPk(_id);
    return { mensage: `Usuário ${userDeleted} deletado`, status: 'Success' };
  }
}
