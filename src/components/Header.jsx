import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './components.css';

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <AiFillHome className='header-home' />
      </Link>
    </nav>
  )
}

export default Header;
