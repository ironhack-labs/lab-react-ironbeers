import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav container">
        <nav className="NavBar">
          <Link className="Nav-link" to="/">
            <span className="Nav-icon icon">
              <i className="fas fa-home"></i>
            </span>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
