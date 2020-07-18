import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>IronBeers</Link>
      </div>
    </nav>
  );
}

export default Navbar;