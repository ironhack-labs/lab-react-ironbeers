import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/beers">All beers</Link>
        </li>
        <li>
          <Link to="/beers/random">Random beer</Link>
        </li>
        <li>
          <Link to="/beers/new">New beer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
