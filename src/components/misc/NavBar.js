import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';


const Navbar = () => (

  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="columns">
      <div className="column">
        <span className="icon is-large">
        <NavLink exact to="/home" className="home">
        <FontAwesomeIcon icon="home" className="fas fa-2x"/>
        </NavLink>
        </span>
      </div>
    </div>
  </nav>
)

export default Navbar