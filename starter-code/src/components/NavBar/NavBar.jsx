import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Link exact to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </div>
  );
}

export default NavBar;
