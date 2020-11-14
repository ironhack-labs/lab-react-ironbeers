import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* usamos el componente Link en lugar de <a> para escribir nuestros links en la app */}
      <Link to="/">
        <img src="../../../home.png" className="home"/>
      </Link>
    </nav>
  );
};

export default Navbar;
