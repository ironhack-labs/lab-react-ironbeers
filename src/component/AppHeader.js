import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AppHeader.css";
import HomeImg from "../assets/home.png";

const AppHeader = () => {
  return (
    <>
      <header class>
        <Link className={`App-link`} to="/">
          <img className="home-img" src={HomeImg} alt="home icon" />
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default AppHeader;
