import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="">
    <Link to="/">
      <nav
        type="navbar"
        className=" display-4 d-flex justify-content-center p-3 btn-primary w-100 mb-3 "
      >
        <i className="fas fa-home"></i>
      </nav>
      </Link>
    </div>
    
  );
}
