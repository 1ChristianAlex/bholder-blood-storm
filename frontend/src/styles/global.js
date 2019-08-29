import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const globalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,900&display=swap');

body{
    font-family: 'Roboto', sans-serif;
    display:block;
    position:relative;
    margin:0;
    padding:0;
}
a{
    color:white;
}
`;

export default globalStyles;
