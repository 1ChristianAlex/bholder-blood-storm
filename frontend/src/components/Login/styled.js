import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const BLogin = {
  section: styled.section`
    width: 100%;
    margin: 35px 0;
  `,
  title: styled.div`
    margin: 15px 0;
  `,
  h1: styled.h1`
    font-size: 30pt;
    text-align: left;
    font-family: 'Merriweather', serif;
  `,
  forgot: styled(Link)`
    color: #209eff;
  `,

  form: styled(Form)``,
  group: styled(Form.Group)``,
  input: styled(Form.Control)`
    margin-bottom: 15px;
    border-bottom: 1px solid #262525;
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
export const BLoginImage = {
  container: styled.div`
    width: 100%;
  `,
  img: styled.img`
    width: 60%;
    margin: 30px auto;
    display: block;
  `
};
export const BCreate = {
  section: styled.section`
    width: 100%;
    margin: 35px 0;
  `,
  title: styled.div`
    margin: 15px 0;
  `,
  h1: styled.h1`
    font-size: 30pt;
    text-align: center;
    font-family: 'Merriweather', serif;
  `,
  imgContainer: styled.div`
    width: 100%;
  `,
  img: styled.img`
    width: 70%;
    margin: 0 auto;
    display: block;
  `,
  link: styled(Link)`
    background-color: #a60909;
    border-radius: 0;
    color: white;
    display: block;
    width: 100%;
    font-family: 'Merriweather', serif;
    border: 1px solid #6b0707;
    padding: 5px;
    font-size: 16pt;
    text-align: center;
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
  text: styled.p`
    margin: 20px auto;
    font-size: 11pt;
    text-align: left;
    width: 100%;
  `
};
