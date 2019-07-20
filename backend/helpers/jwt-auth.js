const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/local');

class WebToken {
  constructor() {
    this.jwt = jwt;
    this.SECRET = SECRET;
    console.log(this.SECRET);
  }
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
