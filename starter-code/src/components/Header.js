import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="home">
        <Link to="../">
          <img src="../images/pngkey.com-home-png-2373015.png" alt="home"></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
