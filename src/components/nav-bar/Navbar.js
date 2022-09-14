import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../../assets/home-logo.png"

function Header() {
  return (
    <>
      <Link to="/">
        <nav className="navbar bg-primary d-flex mb-3">
          <div className="container justify-content-center">
            <img
              src={homeLogo}
              alt="Home"
              width="30"
              height="30"
              className="p-1 align-self-center"
            />
          </div>
        </nav>
      </Link>
    </>
  );
}

export default Header;
