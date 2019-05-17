import React from "react";
import homeIcon from "../img/home.svg";
import { Link } from "react-router-dom";

const navbarStyles = {
  backgroundColor: "rgb(22, 183, 252)",
  width: "100%",
  height: "50px",
  padding: "10px"
};

const NavBar = () => {
  return (
    <div style={navbarStyles}>
      <Link to="/">
        <img style={{ width: "50px" }} src={homeIcon} />
      </Link>
    </div>
  );
};

export default NavBar;
