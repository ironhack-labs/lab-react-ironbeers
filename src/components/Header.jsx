import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<header className="header-blue">
<Link to="/">
  <img className="home-logo" src="../home-logo.png" alt="home logo" />
</Link>
</header>
 );
};

export default Header;