import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}><img src='/images/home-icon.png' className="imgNav"/> </Link>
    </div>
  );
};

export default NavBar;
