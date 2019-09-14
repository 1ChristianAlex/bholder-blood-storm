import { IUser, IUserToken, ILogin } from '../@types/IUser';
import { User } from '../models/user';

import Cryptfy from '../helpers/Crypto';
import jwt from '../helpers/JsonWebToken';

export default class UserController {
  private Crypt = Cryptfy;
  private jwt = jwt;

  public async getAllUser() {
    let allUser = await User.findAll();
    return allUser;
  }
  public async newUser(userData: IUser) {
    try {
      let { password } = userData;
      let cryptoPass = await this.Crypt(password);

      let userCreate = await User.create({ ...userData, password: cryptoPass.toString() });
      return userCreate;
    } catch (error) {
      return null;
    }
  }
  public async login(user: ILogin) {
    try {
      let { userName, password, email } = user;
      let cryptPass = await this.Crypt(password);
      let userLogin = await User.findOne({
        where: {
          userName: userName,
          password: cryptPass
        }
      }).toJSON();
      if (userLogin !== null) {
        let fullUserData: any = userLogin;
        let myUser: IUser = {
          _id: fullUserData.id,
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
      let updateUser = await User.update(user, {
        where: {
          id: user._id
        }
      });
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }
  public async deleteUser(_id) {
    let userDeleted = await User.destroy({
      where: {
        id: _id
      }
    });
    return { mensage: `Usuário ${userDeleted} deletado`, status: 'Success' };
  }
}
