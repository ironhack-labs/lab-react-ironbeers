import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">
        <header>
          <i className="home fa fa-home"></i>
        </header>
      </Link>
    </div>
  );
}

export default Header;

//tres btn all beers, random beer, new beer
