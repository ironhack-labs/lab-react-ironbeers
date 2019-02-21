import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

  return (
    <div className='header'>
      <Link to='/'>
        <img src='https://image.flaticon.com/icons/png/512/25/25694.png' alt='home icon' />
      </Link>
    </div>
  )
}

export default Header;
