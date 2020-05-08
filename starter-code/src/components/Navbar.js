import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark ">
    <Link className="navbar-brand" to="/">
      <img
        src=" /images/home.png"
        width="30"
        height="30"
        className="mr-2 d-inline-block align-top"
        alt=""
      />
      Welcome to IronBeers
    </Link>
  </nav>
);

export default Navbar;
