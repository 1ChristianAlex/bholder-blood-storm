import axios from 'axios';
import { RegexRPG } from './Regex';

export class UserRequest {
  userAxios = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  async RegisterUser(user) {
    let vUser = this.ValidateRegisterValues(user);

    console.log(vUser);

    let userCreating = await this.userAxios.post('/register', {
      ...vUser
    });

    console.log(userCreating);
    if (userCreating.status === 200) {
      this.Login(vUser);
    }
  }
  async Login(user) {
    let login = this.ValidadeLogin(user);

    console.log(login);

    let loginRequest = await this.userAxios.post('/login', {
      ...login
    });

    localStorage.setItem('BHOLDER_ACCESS', loginRequest.data.token);
    console.log(loginRequest);
  }
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
    console.log(user);
    console.log(userValidede);
    return userValidede;
  }
}
