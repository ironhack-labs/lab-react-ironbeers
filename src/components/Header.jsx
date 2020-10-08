import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/header.css"

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink exact to="/">
          <h1>Home</h1>
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
