import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item is-size-5" >
        Iron Beers
        </span>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">

          <NavLink to='/home' className="navbar-item">
            Home
          </NavLink>

          <NavLink to='/beers' className="navbar-item">
            All Beers
          </NavLink>

          <NavLink to='/random-beer' className="navbar-item">
            Random Beer
          </NavLink>

          <NavLink to='/new-beer' className="navbar-item">
            New Beer
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;