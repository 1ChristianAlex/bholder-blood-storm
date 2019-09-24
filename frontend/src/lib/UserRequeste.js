import axios from 'axios';

import { ValidationLogin } from './validation';

import { SET_USER, DELETE_USER } from '../redux/actions/userAction';

import store from '../redux/store';

export class UserRequest {
  userAxios = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  ValidationUser = new ValidationLogin();

  async RegisterUser(user) {
    let vUser = this.ValidationUser.ValidateRegisterValues(user);

    let userCreating = await this.userAxios.post('/register', {
      ...vUser
    });

    if (userCreating.status === 200) {
      this.Login(vUser);
    }
  }
  async Login(user) {
    let login = this.ValidationUser.ValidadeLogin(user);

    let loginRequest = await this.userAxios.post('/login', {
      ...login
    });

    localStorage.setItem('BHOLDER_ACCESS', JSON.stringify({ token: loginRequest.data.token }));
    localStorage.setItem('BHOLDER_USER_DATA', JSON.stringify(loginRequest.data.data));

    store.dispatch(SET_USER({ user: loginRequest.data.data, token: loginRequest.data.token }));
  }
  async LogoutAction() {
    localStorage.removeItem('BHOLDER_ACCESS');
    localStorage.removeItem('BHOLDER_USER_DATA');

    store.dispatch(DELETE_USER());
  }
  async IsLoged() {
    const isLoged = {
      ...(JSON.parse(localStorage.getItem('BHOLDER_ACCESS')) || false),
      user: JSON.parse(localStorage.getItem('BHOLDER_USER_DATA')) || false
    };
    return isLoged.token && isLoged.user ? isLoged : false;
  }
}
