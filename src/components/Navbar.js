import { NavLink } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="nav-container">
      <NavLink to="/"><button className="fa-home"><FontAwesomeIcon icon={faHouse} /></button></NavLink>
    </nav>
  );
}

export default Navbar;

                                                                                                                                                                                                                                                                                                                                                                                 