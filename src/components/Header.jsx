import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          justifyContent: 'space-between',
        }}
      >
        <li>
          <NavLink exact to="/">
            <img className="img-home" src="/4.png" alt="new beer" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
