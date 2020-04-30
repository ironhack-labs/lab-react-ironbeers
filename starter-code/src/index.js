import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById("root"));
registerServiceWorker();
