import React from 'react';
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
                <a href="#">All Beers</a>
              </li>
              <li>
                <a href="#">Random Beer</a>
              </li>
              <li>
                <a href="#">New Beer</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
