import React from 'react';
import ReactDOM from 'react-dom';
import App from './templates/Home/index';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { FinantialContext } from './context/finantial-context';
ReactDOM.render(
  <React.StrictMode>
    <FinantialContext>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </FinantialContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
