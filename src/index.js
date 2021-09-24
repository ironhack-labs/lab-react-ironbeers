import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React>
    <Router>
      <App />
    </Router>
  </React>,
  document.getElementById('root')
);


serviceWorker.unregister();
