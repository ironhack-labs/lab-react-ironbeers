import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <Link className="link" to="/">
          <img src="https://i.postimg.cc/t7WCNSZC/home.png" alt="Home" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
