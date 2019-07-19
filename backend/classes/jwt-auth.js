const jwt = require('jsonwebtoken');
const env = require('../config/local');
class WebToken {
  async createToken(user) {
    let token = jwt.sign({ user }, env.SECRET, {
      expiresIn: 3000
    });
    return token;
  }
}

module.exports = new WebToken();
