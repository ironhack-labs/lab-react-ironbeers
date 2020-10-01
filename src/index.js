import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import HeaderNavBar from './components/HeaderNavBar';

import './stylesheets/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HeaderNavBar
        urls={[
          { name: 'Beers', target: '/beers' },
          { name: 'Random Beer', target: '/random-beer' },
          { name: 'New Beer', target: '/new-beer' },
        ]}
      />
    </Router>
    <App />
    <footer></footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
