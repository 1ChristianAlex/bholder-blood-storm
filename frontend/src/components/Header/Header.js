import React, { Component } from 'react';
import { Navbar, Container, Form, Button, FormControl } from 'react-bootstrap';
import { NavB, LogoHeader, BHeader, FlexItem, SocialHeader, BForm } from './styled';

import { FaFacebookSquare, FaInstagram, FaTwitch, FaYoutube, FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export class Header extends Component {
  render() {
    return (
      <BHeader>
        <Container>
          <NavB.NavBar>
            <NavB.Brand to="/">
              <LogoHeader src={logo} />
            </NavB.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <NavB.BNav>
                <SocialHeader>
                  <NavB.Exteral href="#">
                    <FaFacebookSquare />
                  </NavB.Exteral>
                  <NavB.Exteral href="#">
                    <FaInstagram />
                  </NavB.Exteral>
                  <NavB.Exteral href="#">
                    <FaTwitch />
                  </NavB.Exteral>
                  <NavB.Exteral href="#">
                    <FaYoutube />
                  </NavB.Exteral>
                </SocialHeader>
                <FlexItem flex={2}>
                  <BForm.Form>
                    <BForm.Button variant="outline-success">
                      <FaSearch />
                    </BForm.Button>
                    <BForm.FormControl type="text" placeholder="Pesquise" />
                  </BForm.Form>
                </FlexItem>
                <FlexItem flex={1}>
                  <NavB.Link to="/login">Home</NavB.Link>
                  <NavB.Link to="/register">Link</NavB.Link>
                </FlexItem>
              </NavB.BNav>
            </Navbar.Collapse>
          </NavB.NavBar>
        </Container>
      </BHeader>
    );
  }
}
