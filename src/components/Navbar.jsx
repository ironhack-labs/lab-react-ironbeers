import React from "react";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand mx-auto" to="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
    </nav>
  );
};

export default Navbar;
