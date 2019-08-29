import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavB = {
  NavBar: styled(Navbar)``,
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
    svg {
      color: white;
      font-size: 16pt;
    }
  `,
  BNav: styled(Nav)`
    width: 100%;
  `
};
export const LogoHeader = styled(Image)`
  width: auto;
  height: 55px;
`;
export const BHeader = styled.header`
  background-color: black;
`;
export const FlexItem = styled.div`
  flex: ${props => props.flex};
  color: red;
`;

export const SocialHeader = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const BForm = {
  Form: styled(Form)`
    position: relative;
    background-color: black;
  `,
  FormControl: styled(FormControl)`
    background-color: black;
    width: 100%;
  `,
  Button: styled(Button)`
    position: absolute;
    color: #191818;
  `
};
