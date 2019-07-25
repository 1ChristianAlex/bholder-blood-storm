import jwt from 'jsonwebtoken';
import envolvriment from '../config/local';
import { IUser } from '../@types/IUser';
const { SECRET } = envolvriment;

class WebToken {
  private jwt = jwt;
  private SECRET = SECRET;

  async createToken(user: IUser) {
    let { _id, userName, pass, email } = user;
    let userToken = {
      _id,
      userName,
      pass,
      email
    };
    let token = this.jwt.sign({ ...userToken }, Buffer.from(this.SECRET).toString('hex'), {
      expiresIn: 3000
    });
    return token;
  }
  async verifyToken(token) {
    try {
      let tokenV = this.jwt.verify(token, Buffer.from(this.SECRET).toString('hex'));
      return tokenV;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WebToken();