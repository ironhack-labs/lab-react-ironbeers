import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);