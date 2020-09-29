import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to="/" className="nav">
        <span role="img" aria-label="Home">
          🏠
        </span>
      </Link>
    </nav>
  );
}

export default Nav;
