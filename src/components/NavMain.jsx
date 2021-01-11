import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
    </div>
  );
};

export default NavMain;
