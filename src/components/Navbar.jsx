import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/home-icon.png";;

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: 'blue' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '20px' }}>
      <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '100px' }} />
      </Link>
    </nav>
  );
};

export default Navbar;
