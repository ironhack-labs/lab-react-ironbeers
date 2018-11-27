import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

const Header = () => (
  <Link to='/' >
    <header className="App-header">
      <img src={logo} className="App-logo" alt="React Logo" />
    </header>
  </Link>
)

export default Header;