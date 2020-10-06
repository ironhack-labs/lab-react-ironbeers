import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import { FaHome } from 'react-icons/fa';

const Header = (props) => (
  <Link to="/">
    <header className="Header">
      {/* {props.location.pathname === '/' ? <FaHome className="Header__icon" size={44}/> : <h1>Ironbeers</h1>} */}
      <FaHome className="Header__icon" size={44} />
    </header>
  </Link>
);

export default Header;
