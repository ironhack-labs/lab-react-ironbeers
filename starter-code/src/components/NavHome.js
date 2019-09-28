import React from "react";
import { Link } from "react-router-dom";

const NavHome = props => {
  return (
    <Link to="/" style={{ color: "#fff" }}>
      <div className="nav-home" style={{ padding: "15px 0", background: "blue" }}>
        <i className="fas fa-hamburger fa-2x"></i>
      </div>
    </Link>
  );
};

export default NavHome;
