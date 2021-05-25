import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Raleway', sans-serif;
    padding: 20px 60px;
    background-color: #222;
    color: #eee;
  
    @media screen and (max-width:900px) {
      padding: 20px;
    }
  }
  
  a {
    text-decoration: none;
    color: #eee;
  }
  
  *, *:before, *:after {
  
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    box-sizing: border-box !important;
  }
`;