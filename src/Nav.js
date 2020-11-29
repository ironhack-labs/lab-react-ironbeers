import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
    </nav>
  );
};

export default Nav;
