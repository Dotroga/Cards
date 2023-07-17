import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: white;
  }

  html > body > #root > div {
    height: 100vh;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    div#root {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 528px;
      background-color: #000000;
    }
  }
`;
