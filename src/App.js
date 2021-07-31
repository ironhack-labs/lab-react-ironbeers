import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fa fa-home fa-fw"/>
          </Link>
        </div>
      </nav>

      <HomePage />
    </div>
  );
}

export default App;
