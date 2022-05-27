import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../assets/homeicon.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img className="homeicon" src={homeicon} alt="homeicon" />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
