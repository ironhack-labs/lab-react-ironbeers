import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar is-info">
      <div className="buttons is-centered">
        <Link to="/" className="button is-large is-info">
          <span className="icon">
            <i className="fas fa-home fa-2x"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
