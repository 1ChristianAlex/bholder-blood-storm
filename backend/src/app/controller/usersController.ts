import { IUser, IUserToken, ILogin } from '../interfaces/IUser';
import { User } from '../models/user';

import Cryptfy from '../helpers/Crypto';
import jwt from '../helpers/JsonWebToken';

export default class UserController {
  private Crypt = Cryptfy;
  private jwt = jwt;

  public async GetAll() {
    let allUser = await User.findAll();

    return allUser;
  }
  public async CreateUser(userData: IUser) {
    try {
      let { password } = userData;
      let cryptoPass = await this.Crypt(password);

      let userCreate = await User.create({ ...userData, password: cryptoPass.toString() });

      return userCreate;
    } catch (error) {
      return null;
    }
  }
  public async Login(user: ILogin) {
    try {
      let { userName, password } = user;

      let cryptPass = await this.Crypt(password);

      let userLogin = await User.findOne({
        where: {
          userName: userName,
          password: cryptPass
        }
      });

      if (userLogin !== null) {
        let fullUserData: any = userLogin.toJSON();
        let myUser: IUser = {
          id: fullUserData.id,
          name: fullUserData.name,
          email: fullUserData.email
        };
        let token = await this.jwt.CreateToken(myUser);

        return {
          token,
          data: fullUserData
        };
      }
      return userLogin;
    } catch (error) {
      console.log(error);
    }
  }
  public async UpdateUser(user: IUser, newUser: IUser) {
    try {
      let updateUser = await User.update(newUser, {
        where: {
          id: user.id
        }
      });
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }
  public async DeleteUser(id) {
    let userDeleted = await User.destroy({
      where: {
        id: id
      }
    });

    if (userDeleted == 0) {
      return { mensage: `Not Found`, status: 404 };
    }
    return { mensage: `Success`, status: 200 };
  }
}
