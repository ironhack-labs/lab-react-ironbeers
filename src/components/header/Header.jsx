import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <div className="navbar sticky-top bg-info d-flex flex-roe justify-content-center">
      <Link to="/">
        <i className="fa fa-home fa-2x text-white"></i>
      </Link>
    </div>
  );
}

export default Header;
