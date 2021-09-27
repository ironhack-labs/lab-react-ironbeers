import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar-div">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
