import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavMain.css';

const NavMain = () => {
  return (
    <div className="NavMain">
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default NavMain;
