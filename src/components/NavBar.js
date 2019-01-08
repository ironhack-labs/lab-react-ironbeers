import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({home}) => (
  <NavLink exact to="/" activeClassName="active">
    <nav>
      {!home ? <i className="material-icons">home</i> : <h1>IronBeers</h1>}
    </nav>
  </NavLink>
);

export default NavBar;