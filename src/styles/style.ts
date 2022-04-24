import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color: white;
  }

  .selectable-selectbox {
    z-index: 9000;
    position: absolute;
    cursor: default;
    background: none;
    border: 1px dashed grey;
  }
`;

export default GlobalStyle;
