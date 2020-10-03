import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <Link className="text-white align-middle w-100" to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
