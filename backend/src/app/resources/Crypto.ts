import Crypto from 'crypto';
import Env from '../../config/local';
const cryptfy = pass => {
  {
    try {
      let salt = Buffer.from(Env.SECRET).toString('hex');
      let hashPass = Crypto.pbkdf2Sync(pass, salt, 616, 32, 'sha512').toString('hex');

      return hashPass;
    } catch (error) {
      console.log(error);
    }
  }
};
export default cryptfy;
