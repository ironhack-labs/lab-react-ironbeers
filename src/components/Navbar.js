import React from "react";
import beerLogo from "../assets/beerLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-primary bg-primary">
      <div className="container-fluid d-flex justify-content-center">
        <Link
          className="navbar-brand text-white d-flex align-items-center"
          to="/"
        >
          <img
            src={beerLogo}
            alt=""
            width="50"
            height="35"
            className="d-inline-block align-text-top"
          />
          IRON BEERS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
