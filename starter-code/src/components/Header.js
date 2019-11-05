import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
  return (
    <Link to = '/'>
  <div className="navbar-brand">
    <img src="/images/home.png" alt="home" /> 
  </div>
  </Link>
  )
}

export default Header;