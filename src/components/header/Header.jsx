import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/">All Beers</Link>
              </li>
              <li>
                <Link to="/random">Random Beer</Link>
              </li>
              <li>
                <Link to="/new">New Beer</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
