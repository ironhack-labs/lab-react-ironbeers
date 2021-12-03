import React from 'react';
import { Link } from 'react-router-dom';
import homeButton from './../assets/—Pngtree—home button black_6278025.png';

function Header() {
  return (
    <nav className="nav-bar">
      <div>
        <Link to="/">
          <img src={homeButton} alt="home button" width="10%" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
