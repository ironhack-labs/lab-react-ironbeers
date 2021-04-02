import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
        <i className="fa fa-home fa-2x mt-3" aria-hidden="true"></i>
      </Link>
    </header>
  );
};

export default Navbar;