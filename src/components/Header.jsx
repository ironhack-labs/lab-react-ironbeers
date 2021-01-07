import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <nav
      style={{
        backgroundColor: 'dodgerblue',
        height: '5rem',
      }}
    >
      <NavLink exact to="/">
        <img
          style={{
            width: '3rem',
            height: '3rem',
            marginTop: '1rem',
          }}
          src="/images/home.png"
          alt=""
        />
      </NavLink>
      {/* <NavLink exact to="/beers">
        All Beers Page
      </NavLink>
      <NavLink exact to="/randomBeer">
        Random Beer Page
      </NavLink>
      <NavLink exact to="/newBeer">
        New Beer Page
      </NavLink> */}
    </nav>
  );
};

export default NavMain;
