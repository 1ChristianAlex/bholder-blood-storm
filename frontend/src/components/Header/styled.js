import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavB = {
  NavBar: styled(Navbar)`
    background-color: black;
  `,
  Brand: styled(Link)`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  `,
  Link: styled(Link)`
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `,
  Exteral: styled(Nav.Link)`
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: white;
  `
};
export const LogoHeader = styled(Image)`
  width: 100%;
`;
