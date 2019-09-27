import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
        <div className="columns is-centered">
          <div className="column is-half">
            <span className="icon has-text-white is-text-center">
              <i className="fas fa-3x fa-home"></i>
            </span>
          </div>
        </div>
        </Link>
      </div>
    </nav>
  );
}
