import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMain() {
  return (
    <nav class="flexNav">
      <NavLink exact to="/">
        Home
      </NavLink>
    </nav>
  );
}

export default NavMain;
