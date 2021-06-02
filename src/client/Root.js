import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createBrowserHistory } from "history";

import dotenv from 'dotenv';
import App from 'shared/App';

const history = createBrowserHistory();
dotenv.config();

const Root = () => {
  return (
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  );
};

export default Root;