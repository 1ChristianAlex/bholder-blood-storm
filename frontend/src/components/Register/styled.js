import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import gorgona from '../../assets/gorgona.png';

export const BRegister = {
  section: styled.section`
    width: 100%;
    background-image: url(${gorgona});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
  `,
  container: styled.div`
    width: 40%;
    margin: 35px auto;
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  `,
  title: styled.div`
    margin: 15px 0;
  `,
  h1: styled.h1`
    font-size: 40pt;
    text-align: center;
    font-family: 'Merriweather', serif;
  `,
  forgot: styled(Link)`
    color: #209eff;
  `,

  form: styled(Form)``,
  group: styled(Form.Group)``,
  input: styled(Form.Control)`
    margin-bottom: 15px;
    border-bottom: 1px solid ${props => (props.validate ? '#262525' : 'red')};
    border-radius: 0;
  `,
  button: styled(Button)`
    background-color: #a60909;
    color: white;
    display: block;
    border-radius: 0;
    width: 100%;
    font-family: 'Merriweather', serif;
    border: 1px solid #6b0707;
    font-size: 16pt;
    :hover {
      background-color: #6b0707;
      color: white;
      display: block;
      width: 100%;
      border: 1px solid #6b0707;
    }
    :focus {
      background-color: #6b0707;
      color: white;
      display: block;
      width: 100%;
      border: 1px solid #6b0707;
    }
  `,
  remeberL: styled(Form.Check)`
    color: #209eff;
    font-size: 14pt;
    margin-bottom: 15px;
    input {
      width: 25px;
      height: 25px;
    }
    label {
      margin: 5px 15px;
    }
  `
};
