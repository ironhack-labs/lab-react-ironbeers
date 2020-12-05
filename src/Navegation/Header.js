import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="navBar df-jc-ac">
      <Link to="/">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/25/25694.svg"
          alt="Home Page"
        ></img>
      </Link>
    </nav>
  );
}

export default Header;
