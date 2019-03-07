import React from 'react';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.min.css";
import "bulma-helpers/css/bulma-helpers.min.css"
import './index.css';
import App from './App';
//import "react-fontawesome"
//import '@fortawesome/fontawesome-free/css/all.min.css';
import "font-awesome/css/font-awesome.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
