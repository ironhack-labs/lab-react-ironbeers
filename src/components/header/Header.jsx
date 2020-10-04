import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <h1 className="mh-logo">IronBeers React</h1>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <NavLink exact activeClassName="selected" to="/">
                  All Beers
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/random">
                  Random Beer
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/new">
                  New Beer
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
