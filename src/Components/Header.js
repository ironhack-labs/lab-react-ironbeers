import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
                <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
      <Link to="/">
        <button className="btn btn-primary">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </nav>
  );
}

export default Header;