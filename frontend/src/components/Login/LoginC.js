import React, { Component } from 'react';
import { BLogin, BLoginImage } from './styled';
import { MdArrowForward } from 'react-icons/md';
import logo from '../../assets/logo-black.png';

export class LoginC extends Component {
  render() {
    return (
      <>
        <BLogin.section>
          <BLogin.title>
            <BLogin.h1>Login</BLogin.h1>
            <BLogin.forgot to="/recovery-pass">Esqueceu a senha?</BLogin.forgot>
          </BLogin.title>
          <BLogin.form method="POST">
            <BLogin.group controlId="input-user-acess">
              <BLogin.input type="email" required title="Email" placeholder="E-mail *" />
              <BLogin.input type="password" required title="Password" placeholder="Senha *" />
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
}
