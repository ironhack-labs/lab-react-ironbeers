import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeButtonHeader = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default HomeButtonHeader;
