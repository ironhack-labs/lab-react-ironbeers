import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <Link to="/home">
        <div className="navbar-brand">
          <h1 className="title has-text-light level-item">
            Beers App <i className="fas fa-beer" />
          </h1>
        </div>
      </Link>
      <div className="navbar-links">
        <NavLink to="/home" className="navbar-item has-text-weight-semibold" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/beers" className="navbar-item has-text-weight-semibold" activeClassName="is-active">
          All Beers
        </NavLink>
        <NavLink to="/random-beer" className="navbar-item has-text-weight-semibold" activeClassName="is-active">
          Random Beer
        </NavLink>
        <NavLink to="/new-beer" className="navbar-item has-text-weight-semibold" activeClassName="is-active">
          New Beer
        </NavLink>
      </div>

    </nav >
  )
}

export default NavBar;