import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  (<BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
