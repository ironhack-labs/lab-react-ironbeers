import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className="navbar navbar-dark bg-primary justify-content-center"
      style={{ "margin-bottom": "20px", textAlign: "center" }}
    >
      <div>
        <h3>
          <Link to="/" style={{ textAlign: "center", color: "white" }}>
            Home
          </Link>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
