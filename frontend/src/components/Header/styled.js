import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const BHeader = {
  header: styled.header`
    width: 100%;
    background-color: black;
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
  `,
  Nav: styled.nav`
    padding: 5px 0;
  `,
  collpase: styled.div`
    display: flex;
    flex-flow: wrap;
    @media only screen and (max-width: 991px) {
      flex-flow: column;
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
  `,
  dropItem: styled.li`
    padding: 0;
  `,
  dropTitle: styled.a`
    padding: 0;
  `,
  toggleMenu: styled(Button)`
    display: none;
    @media only screen and (max-width: 991px) {
      display: block;
      position: absolute;
    }
  `
};
