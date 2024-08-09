import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"; // Update with your actual icon path

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#5cc0ff", padding: "10px" }}>
      <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={homeIcon}
          alt="Home"
          style={{ width: "40px", height: "40px" }}
        />
      </Link>
    </nav>
  );
}

export default Navbar;
