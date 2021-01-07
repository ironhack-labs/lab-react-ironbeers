import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default NavMain;
