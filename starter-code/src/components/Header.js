import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img alt='home' src='/images/home.png' />
      </Link>
    </div>
  );
}

export default Header;
