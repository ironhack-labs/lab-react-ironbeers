import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="Header">
      <NavLink exact to="/" className="link">
        <img src="./../img/home-icon.png" alt="home icon"/>
      </NavLink>
    </nav>
  );
};

export default Header;
