import React from 'react';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <NavLink to="/">
        <img
          className="img-fluid p-0 m-0"
          src={process.env.PUBLIC_URL + '/images/header.png'}
          alt="header"
        />
      </NavLink>
    </div>
  );
}

export default Header;
