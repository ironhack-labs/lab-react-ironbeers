import React from 'react';
import { Link, Route } from 'react-router-dom';
import homeIcon from '../../home.png';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'aqua' }}>
      <Route>
        <Link to="/">
          <img src={homeIcon} alt="" />
        </Link>
      </Route>
    </nav>
  );
};

export default Navbar;
