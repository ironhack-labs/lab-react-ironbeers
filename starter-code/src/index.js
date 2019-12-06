import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as serviceWorker from "./serviceWorker";
import Router from "./Router";
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import GlobalStyles from "./styles/GlobalStyles";


ReactDOM.render(
  <>
    <Router /> 
  </>, 
document.getElementById('root')
);
registerServiceWorker();
//serviceWorker.unregister();