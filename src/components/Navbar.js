import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-beers text-center">
        {/* eslint-disable-next-line */}
        <Link to="/"><h1>🍻</h1></Link>
      </div>
    );
  }
}

export default Navbar;
