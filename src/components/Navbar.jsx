import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
        <i className="fa fa-home fa-lg mt-3" aria-hidden="true"></i>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {/* <Link className="py-2 text-dark text-decoration-none" to="/beers/new">
          New beer
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;