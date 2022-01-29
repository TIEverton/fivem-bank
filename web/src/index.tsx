import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/global';

import { VisibilityProvider } from "./providers/VisibilityProvider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VisibilityProvider>
        <App />
        <GlobalStyle />
      </VisibilityProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
