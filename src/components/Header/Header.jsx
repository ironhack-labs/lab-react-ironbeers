import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <Link to='/'>
        <div className='home-div'>
          <img src='https://static.thenounproject.com/png/3574480-200.png' alt='home'/>
        </div>
      </Link>
    </div>
  );
};

export default Header;