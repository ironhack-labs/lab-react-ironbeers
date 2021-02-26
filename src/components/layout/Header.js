import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav'>
      <NavLink to="/" className='navLink'>Home</NavLink>
    </nav>
  );
};

export default Header;
