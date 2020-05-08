import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar navbar-ligth bg-dark ">
    <Link className="navbar-brand" to="/">
       🏠
    </Link>
  </nav>
);

export default Navbar;