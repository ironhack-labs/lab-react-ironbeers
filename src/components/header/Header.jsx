import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <div className="navbar bg-info d-flex flex-roe justify-content-center">
      <a href="/">
        <i className="fa fa-home fa-2x text-white"></i>
      </a>
    </div>
  );
}

export default Header;
