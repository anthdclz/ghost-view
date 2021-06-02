import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Raleway', sans-serif;
  background-color: #233;
  color: #eee;

  & .page {
    padding: 90px 40px 20px;

    @media screen and (max-width:900px) {
      padding: 90px 0 20px;
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
  margin-left: 20px;
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
  .gallery-item {
    height: 222px;
    width: 145px;
    font-size: 20px;
  }
    .news-item .text {
        display: none;
    }
    .sign-in-sign-up {
      width: unset;
      display: flex;
      flex-direction: column;

      .custom-button{
        margin-bottom: 20px;
      }
    }
    .sign-in {
      width: 100%;

      .buttons {
        display: flex;
        flex-direction: column;
      }
    }
    .sign-up {
      width: 100%;
      margin-top: 100px;

      .custom-button{
        width: 100%;
      }
    }
}

`;