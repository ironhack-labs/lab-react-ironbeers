import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/">
        <span className="navbar-item"><i className="fas fa-home fa-2x"></i></span>
      </Link>
    </div>
  </nav>
)

export default Header;