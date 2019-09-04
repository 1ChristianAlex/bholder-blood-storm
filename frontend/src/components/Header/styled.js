import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const BHeader = {
  header: styled.header`
    width: 100%;
    background-color: black;
    position: relative;
  `,
  container: styled.div`
    padding: 15px 0;
  `,
  logo: styled.div`
    text-align: center;
  `,
  img: styled(Image)`
    margin: 0 auto;
    width: 100%;
  `,
  link: styled(Link)`
    :hover {
      opacity: 0.8;
    }
  `
};
export const UserAcess = {
  container: styled.div`
    display: flex;
    flex-flow: wrap;
    margin: 15px 0;
  `,
  link: styled(Link)`
    flex: 1;
    text-align: center;
    :hover {
      color: #a70202;
    }
  `
};
export const SocialIcon = {
  container: styled.div`
    display: flex;
    flex-grow: row;
  `,
  item: styled.a`
    flex: 1;
    text-align: center;
    font-size: 16pt;
    margin: 15px 0;
    :hover {
      color: #a70202;
    }
  `
};
export const BNav = {
  section: styled.div`
    background-color: #a70202;
    @media only screen and (max-width: 991px) {
      position: absolute;
      width: 100%;
      top: ${props => (props.isOpen ? '-200%' : '100%')};
      transition: 0.5s;
      z-index: 99;
    }
  `,
  Nav: styled.nav`
    padding: 5px 0;
  `,
  collpase: styled.div`
    display: flex;
    flex-flow: wrap;
    @media only screen and (max-width: 991px) {
      flex-flow: column;
      transition: 0.5s;
      overflow: hidden;
    }
  `,
  item: styled.div`
    flex: 1;
    position: relative;
    text-align: center;
  `,
  link: styled(Link)`
    color: red;
  `,
  dropdown: styled.ul`
    list-style: none;
    display: none;
    position: absolute;
    background: black;
    padding: 5px 15px;
    right: 0;
    left: 0;
    @media only screen and (max-width: 991px) {
      position: relative;
      transition: 0.5s;
    }
  `,
  dropItem: styled.li`
    padding: 0;
  `,
  dropTitle: styled.a`
    padding: 0;
    @media only screen and (max-width: 991px) {
      display: block;
      padding: 5px 0;
    }
  `,
  toggleMenu: styled.button`
    display: none;
    @media only screen and (max-width: 991px) {
      background-color: #a70202;
      border: 1px solid white;
      display: block;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 13pt;
      :focus {
        background-color: white;
        border: 1px solid #a70202;
        display: block;
        color: #a70202;
      }
    }
  `
};
