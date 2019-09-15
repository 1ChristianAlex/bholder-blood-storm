import React, { Component } from 'react';
import { BRegister } from './styled';
import { MdArrowForward } from 'react-icons/md';
import { UserRequest } from '../../lib/User';

export class RegisterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userName: '',
      email: '',
      password: '',
      passwordC: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }
  render() {
    return (
      <>
        <BRegister.section>
          <BRegister.container>
            <BRegister.title>
              <BRegister.h1>Criar uma Conta</BRegister.h1>
            </BRegister.title>
            <BRegister.forgot to="/login">ou faça o Login caso já passou uma conta.</BRegister.forgot>
            <BRegister.form onSubmit={this.handleSubmit}>
              <BRegister.group controlId="name">
                <BRegister.input type="text" placeholder="Nome *" name="name" onChange={this.handleChange} required />
              </BRegister.group>
              <BRegister.group controlId="userName">
                <BRegister.input type="text" placeholder="Nome de usuário *" name="userName" onChange={this.handleChange} required />
              </BRegister.group>
              <BRegister.group controlId="email">
                <BRegister.input type="email" placeholder="E-mail *" name="email" onChange={this.handleChange} required />
              </BRegister.group>
              <BRegister.group controlId="password">
                <BRegister.input type="password" placeholder="Senha *" name="password" onChange={this.handleChange} required />
              </BRegister.group>
              <BRegister.group controlId="passwordC">
                <BRegister.input type="password" placeholder="Confirme senha *" name="passwordC" onChange={this.handleChange} required />
              </BRegister.group>
              <BRegister.group controlId="terms-sign">
                <BRegister.remeberL type="checkbox" label="Li e aceito os termos de uso do usuário" />
              </BRegister.group>
              <BRegister.group controlId="button-sign">
                <BRegister.button type="submit" onSubmit={this.handleSubmit}>
                  Login <MdArrowForward />
                </BRegister.button>
              </BRegister.group>
            </BRegister.form>
          </BRegister.container>
        </BRegister.section>
      </>
    );
  }
  handleChange(e) {
    let input_name = e.currentTarget.name;
    let currentValue = e.currentTarget.value;

    this.setState({
      [input_name]: currentValue
    });
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.register(this.state);
  }
  async register(user) {
    const userRequest = new UserRequest();

    userRequest.register(user);
  }
}
