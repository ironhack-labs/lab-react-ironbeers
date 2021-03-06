import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <p>🏠</p>
        </Link>
      </nav>
    );
  }
}

export default Header;
