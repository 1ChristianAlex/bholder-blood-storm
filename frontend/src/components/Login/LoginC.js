import React, { Component } from 'react';
import { UserRequest } from '../../lib/User';

import { BLogin, BLoginImage } from './styled';
import { MdArrowForward } from 'react-icons/md';
import logo from '../../assets/logo-black.png';

export class LoginC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.Login = this.Login.bind(this);
  }
  render() {
    return (
      <>
        <BLogin.section>
          <BLogin.title>
            <BLogin.h1>Login</BLogin.h1>
            <BLogin.forgot to="/recovery-pass">Esqueceu a senha?</BLogin.forgot>
          </BLogin.title>
          <BLogin.form onSubmit={this.HandleSubmit}>
            <BLogin.group controlId="input-user-acess">
              <BLogin.input type="text" placeholder="Nome de usuário *" name="userName" onChange={this.HandleChange} required />
              <BLogin.input type="password" placeholder="Senha *" name="password" onChange={this.HandleChange} required />
            </BLogin.group>
            <BLogin.group controlId="remeber-me">
              <BLogin.remeberL type="checkbox" label="Lembre-me" />
            </BLogin.group>
            <BLogin.button type="submit">
              Login <MdArrowForward />
            </BLogin.button>
          </BLogin.form>
          <BLoginImage.container>
            <BLoginImage.img src={logo} />
          </BLoginImage.container>
        </BLogin.section>
      </>
    );
  }
  HandleChange(e) {
    let input_name = e.currentTarget.name;
    let currentValue = e.currentTarget.value;

    this.setState({
      [input_name]: currentValue
    });
    console.log(this.state);
  }
  HandleSubmit(e) {
    e.preventDefault();

    this.Login(this.state);
  }
  async Login(user) {
    const userRequest = new UserRequest();

    userRequest.Login(user);
  }
}
