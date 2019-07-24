import jwt from 'jsonwebtoken';
import envolvriment from '../config/local';
const { SECRET } = envolvriment;

class WebToken {
  private jwt = jwt;
  private SECRET = SECRET;

  async createToken(user) {
    let token = this.jwt.sign({ user }, this.SECRET, {
      expiresIn: 3000
    });
    return token;
  }
  async verifyToken(token) {
    let result = await this.jwt.verify(token, this.SECRET, async resultToken => {
      console.log(resultToken);
    });
    return result;
  }
}

module.exports = new WebToken();
