import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <NavLink className="homelink" to="/">
            <img
              className="home-logo"
              src="/img/home-icon.png"
              alt="home-icon"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
