import React from "react";

import { Link } from "react-router-dom";

import home from "../../public/icon/home.svg";

export const Header = () => (
  <header className="card-header bg-primary">
    <Link to={"/"} className="link-header">
      <img src={home} alt="Home Icon" className="home-icon"></img>
    </Link>
  </header>
);
