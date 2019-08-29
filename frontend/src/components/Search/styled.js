import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const SearchForm = {
  searchForm: styled(Form)``,
  searchGroup: styled(Form.Group)`
    position: relative;
    margin: 10px 0;
  `,
  searchButton: styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    border: unset;
    :hover {
      color: #870202;
      background: transparent;
      border: unset;
    }
    :focus {
      color: #870202;
      background: transparent;
      border: unset;
    }
  `,
  searchInput: styled(Form.Control)`
    width: 100%;
    border-radius: unset;
    background-color: #1b1b1b;
    border: 1px solid #3e3c3c;
    :focus {
      color: white;
      background-color: #3e3e3e;
      border-color: unset;
      outline: 0;
      box-shadow: unset;
    }
  `
};
