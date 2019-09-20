import JsonImport from 'jsonwebtoken';
import envolvriment from '../../config/local';
import { IUser } from '../interfaces/IUser';
const { SECRET } = envolvriment;

class WebToken {
  private JsonWebToken = JsonImport;
  private SECRET = SECRET;

  async CreateToken(user: IUser) {
    delete user.password;

    let userToken = {
      ...user
    };
    let token = this.JsonWebToken.sign({ ...userToken }, Buffer.from(this.SECRET).toString('hex'), {
      expiresIn: 3000
    });

    return token;
  }
  async Verify(token) {
    try {
      let tokenV = this.JsonWebToken.verify(token, Buffer.from(this.SECRET).toString('hex'));

      return tokenV;
    } catch (error) {
      return null;
    }
  }
}

export default new WebToken();
