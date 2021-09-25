import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light navbar-light bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <i className="fas fa-home"></i>
        </NavLink>

             </div>
    </nav>
  );
}

export default Navbar;