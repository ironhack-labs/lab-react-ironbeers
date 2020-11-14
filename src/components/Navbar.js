import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* usamos el componente Link en lugar de <a> para escribir nuestros links en la app */}
      <Link to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
