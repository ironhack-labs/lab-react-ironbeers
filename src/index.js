import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/Routes/Routes';

import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
