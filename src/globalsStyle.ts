import { createGlobalStyle } from "styled-components";

export const GlobalsStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,400;0,600;0,700;1,600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
    font-family: 'Fira Sans', sans-serif;
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  @keyframes switchColors {
    0% {
      background-color: ${(props) => props.theme.colors.primary_dark};
      transform: scale(1);
    }
    50% {
      background-color: ${(props) => props.theme.colors.primary};
      transform: scale(1.1);
    }
    100% {
      background-color: ${(props) => props.theme.colors.primary_light};
      transform: scale(1);
    }
  }
`;
