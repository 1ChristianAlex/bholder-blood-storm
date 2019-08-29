import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BHeader, UserAcess, BNav } from './styled';
import { SocialHeader } from './socialHeader';
import { BSearch } from '../Search/form';
import { MdMenu } from 'react-icons/md';
import logo from '../../assets/logo.png';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItem: ['Criação', 'Personagens', 'Sem ideia', 'Opção']
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  render() {
    return (
      <BHeader.header>
        <Container>
          <BHeader.container>
            <Row>
              <Col md={3}>
                <BHeader.logo>
                  <BHeader.link to="/">
                    <BHeader.img src={logo} />
                  </BHeader.link>
                </BHeader.logo>
              </Col>
              <Col md={3}>
                <SocialHeader />
              </Col>
              <Col md={3}>
                <BSearch />
              </Col>
              <Col md={3}>
                <UserAcess.container>
                  <UserAcess.link to="/login">Login</UserAcess.link>
                  <UserAcess.link to="/register">Registrar</UserAcess.link>
                </UserAcess.container>
              </Col>
            </Row>
          </BHeader.container>
        </Container>
        <BNav.section>
          <Container>
            <BNav.Nav>
              <BNav.toggleMenu>
                <MdMenu />
              </BNav.toggleMenu>
              <BNav.collpase>
                {[].map.call([...this.state.menuItem], (item, i) => {
                  return (
                    <BNav.item key={i}>
                      <BNav.dropTitle href="#" data-drop={i} onClick={e => this.toggleDropdown(i, e)}>
                        {item}
                      </BNav.dropTitle>
                      <BNav.dropdown data-dropdown={i} data-toggle="close" onMouseLeave={e => this.toggleDropdown(i, e)}>
                        <BNav.dropItem>
                          <BNav.link to="/">Teste</BNav.link>
                        </BNav.dropItem>
                        <BNav.dropItem>
                          <BNav.link to="/">Teste</BNav.link>
                        </BNav.dropItem>
                        <BNav.dropItem>
                          <BNav.link to="/">Teste</BNav.link>
                        </BNav.dropItem>
                      </BNav.dropdown>
                    </BNav.item>
                  );
                })}
              </BNav.collpase>
            </BNav.Nav>
          </Container>
        </BNav.section>
      </BHeader.header>
    );
  }
  toggleDropdown(index, e) {
    let dropdown = document.querySelector(`[data-dropdown="${index}"]`);
    if (dropdown.dataset.toggle == 'close') {
      dropdown.style.display = 'block';
      dropdown.dataset.toggle = 'open';
    } else {
      dropdown.style.display = 'none';
      dropdown.dataset.toggle = 'close';
    }
    e.preventDefault();
  }
}
