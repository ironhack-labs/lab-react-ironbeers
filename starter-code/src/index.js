import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import GlobalStyles from "./styles/GlobalStyles";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <>
    <GlobalStyles/>
    <Router />
  </>, 
  document.getElementById('root')
);


registerServiceWorker();

