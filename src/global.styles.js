import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Raleway', sans-serif;
  background-color: #233;
  color: #eee;

  & .page {
    padding: 90px 60px 20px;

    @media screen and (max-width:900px) {
      padding: 90px 20px 20px;
    }
  }


  & .item-page .page {
    padding: 20px 60px;

    @media screen and (max-width:900px) {
      padding: 20px;
    }
  }
}
  
a {
  text-decoration: none;
  color: #dc9;
}
* {
  box-sizing: border-box;
}
*, *:before, *:after {  
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    box-sizing: border-box !important;
}

h1, h2 {
  color: #feb;
}

.f25 {
    font-size: 25px;
}

.f15 {
    font-size: 15px;
}

.lh20 {
    line-height: 20px;
}

.f12 {
    font-size: 12px;
}

.fw600 {
    font-weight: 600;
}

@media screen and (max-width:900px) {
    .news-item .text {
        display: none;
    }
}

`;