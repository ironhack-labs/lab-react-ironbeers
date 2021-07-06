import React from 'react';
import { Link, } from 'react-router-dom';
import house from '../assets/house.png';

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <img src={house} style={{ height: '4vh' }} alt="beer" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
