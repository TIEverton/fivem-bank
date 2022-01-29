import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/global';

import { VisibilityProvider } from "./providers/VisibilityProvider";

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
      <GlobalStyle />
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
