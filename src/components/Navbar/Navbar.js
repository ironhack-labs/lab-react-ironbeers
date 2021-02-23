import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              alt="HOME"
              src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
