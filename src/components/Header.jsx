import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink exact to="/">
          Home
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
