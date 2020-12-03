import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="nav-style">
        <Link to="/" style={{ background:"pink", color: "black", display:"block", textDecoration: "none", height: "40px",  }} className="home">HOME</Link>
    </nav>
    );
  };

  export default Navbar;