import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
html, body{
  margin: 0;
  padding: 0;
  font-size: 16px;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  font-family: 'Roboto'
}
body{
  position: relative;
  margin-top: 150px;

}
`;

export default GlobalStyles;