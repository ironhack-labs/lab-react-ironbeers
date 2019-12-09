import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="myNav">
      <Link to="/">
        <FontAwesomeIcon icon="home" className="home"/>
      </Link>
    </div>
  )

}

export default Navbar
