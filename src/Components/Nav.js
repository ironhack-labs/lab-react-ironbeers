import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/home.png';

const Nav = () => {

  return (
    <nav style={{ backgroundColor: 'skyblue', padding: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/home'>
          <img alt={'logo'} style={{ width: 25 }} src={logo}></img>
        </Link>
      </div>
    </nav>

  )
}

export default Nav