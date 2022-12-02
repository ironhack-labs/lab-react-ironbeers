import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand" href="/">Home</NavLink>
            </div>
        </nav>           
    </div>
  )
}

export default Navbar;