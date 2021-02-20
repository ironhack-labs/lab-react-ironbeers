import React from 'react';
import { Link, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'aqua' }}>
      <Route>
        <Link to="/">
          <img src="./images/home.png" alt="" />
        </Link>
      </Route>
    </nav>
  );
};

export default Navbar;
