import React from "react";
import { Link } from "react-router-dom";
import "./AppHeader.css";
import Home from "./Home";

const AppHeader = () => {
  return (
    <div className="main">
      <header>
        <Link className={`App-header`} to="/">
          <img src={Home} alt="home icon" />
        </Link>
        <h1>title</h1>
        <Link className={`App-link`} to="/">
          Home
        </Link>
      </header>
    </div>
  );
};

export default AppHeader;
