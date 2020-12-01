import React from 'react';
import Link from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </nav>
  );
}

export default NavBar;
