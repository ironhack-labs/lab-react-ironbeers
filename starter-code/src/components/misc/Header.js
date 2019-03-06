import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <NavLink to="/">
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
         <i className="fas fa-home"></i>
      </div>
    </nav>
  </NavLink>
)

export default Header

