import { RegexRPG } from './Regex';

export class ValidationLogin {
  ValidadeLogin(user) {
    let userValidede = {};

    if (user.userName.length > 4 && RegexRPG.valUserName(user.userName)) {
      userValidede = {
        ...user
      };
    }
    return userValidede;
  }
  ValidateRegisterValues(user) {
    let userValidede = {};

    if (user.name.length > 7 && RegexRPG.onlyText(user.name)) {
      userValidede.name = user.name;
    }
    if (user.userName.length > 4 && RegexRPG.valUserName(user.userName)) {
      userValidede.userName = user.userName;
    }
    if (RegexRPG.valEmail(user.email)) {
      userValidede.email = user.email;
    }
    if (user.password === user.passwordC) {
      userValidede.password = user.password;
    }
    return userValidede;
  }
}
