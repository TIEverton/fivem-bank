import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(5px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(5px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(5px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
