import crypto from 'crypto';
import env from '../config/local';
const cryptfy = pass => {
  {
    try {
      console.log(pass);
      let salt = Buffer.from(env.SECRET).toString('hex');
      let hashPass = crypto.pbkdf2Sync(pass, salt, 616, 32, 'sha512').toString('hex');
      return hashPass;
    } catch (error) {
      console.log(error);
    }
  }
};
export default cryptfy;
