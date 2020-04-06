import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav NavBar">
        <ul className="Nav-item">
          <li className="Nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="Nav-link">
            <Link to="/ListBeers">All Beers</Link>
          </li>
          <li className="Nav-link">
            <Link to="/SingleBeer">Single Beer</Link>
          </li>
          <li className="Nav-link">
            <Link to="/RandomBeer">Choose a radom beer</Link>
          </li>
          <li className="Nav-link">
            <Link to="/AddNewBeer">Add a new beer</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
