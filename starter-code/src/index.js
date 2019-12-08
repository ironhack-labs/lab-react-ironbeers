import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();