import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeDefaultImg from '../assets/home.png';


const Header = () => {
  return (
    <header className='header-logo'>
      <NavLink to="/">
        <img src={HomeDefaultImg} alt='home-img' className='home-logo'/>
      </NavLink>
    </header>
  );
};

export default Header;
