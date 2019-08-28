import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { NavB, LogoHeader } from './styled';

import { FaFacebookSquare } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export class Header extends Component {
  render() {
    return (
      <NavB.NavBar>
        <NavB.Brand to="/">
          <LogoHeader src={logo} />
        </NavB.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavB.Exteral href="#">
              <FaFacebookSquare />
            </NavB.Exteral>
          </Nav>
          <Nav className="mr-auto">
            <NavB.Link href="#home">Home</NavB.Link>
            <NavB.Link href="#link">Link</NavB.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </NavB.NavBar>
    );
  }
}
