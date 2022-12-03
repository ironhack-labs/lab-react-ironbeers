import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIco } from "../assets/home.svg";
const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        {/* <img src={} alt="Home" /> */}
        <HomeIco stroke="black" className="icon" />
      </Link>
    </div>
  );
};

export default Header;
