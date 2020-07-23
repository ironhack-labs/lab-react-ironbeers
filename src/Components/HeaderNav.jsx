import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
