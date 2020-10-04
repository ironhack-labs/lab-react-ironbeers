import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to='/'>
      <header className='header'>
        <i className='fa fa-home'></i>
      </header>
    </Link>
  )
}

export default Header;