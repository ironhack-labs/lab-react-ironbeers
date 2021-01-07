import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div className="nav-link">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink exact to="/">
              <img
                alt="home"
                style={{ height: '35px' }}
                src={'../../home.svg'}
              />{' '}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMain;
