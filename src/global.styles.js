import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
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

.f20 {
    font-size: 20px;
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
    line-height: 28px;

    .the-dark-roast {
        font-size: 15px;
        line-height: 32px;
    }
    .arabica-nights {
        font-size: 28px;
        line-height: 32px;
    }
    .the-ground-lore {
        font-size: 18px;
    }
    .wicked-grim {
        font-size: 24px;
    }

    & .volume-block{
        height:36px;
    }
  }
    .chart-wrapper {
      flex-direction: column;
      height:394px;

      .gallery-item.item-block{
        width:100%;
        height: 84px;
        margin:0;

        & .flair-image{
          height: 64px;
        }
      }

      #chart_div {
        width: 100%;
        height: 300px;
      }
    }
    .news-item .text {
        display: none;
    }
    .sign-in-sign-up {
      width: unset;
      display: flex;
      flex-direction: column;

      & h2{
        margin-left: 0;
      }
      .custom-button{
        margin-bottom: 20px;
      }
    }
    .sign-in {
      width: unset;
      margin: 0 20px;

      .buttons {
        display: flex;
        flex-direction: column;
      }
    }
    .sign-up {
      width: unset;
      margin: 100px 20px 0 20px;

      .custom-button{
        width: 100%;
      }
    }
}

`;