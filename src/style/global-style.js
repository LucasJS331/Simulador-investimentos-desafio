import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'arial';
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        font-size: 1.6rem;
    }
    input {
      display: block;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      padding: 0.5rem;
      width: 100%;
    }

`;
