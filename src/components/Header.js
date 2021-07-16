
import React from "react";
import homeLogo from "../assets/Screenshot 2021-07-16 at 12.05.53.png";
import { NavLink } from "react-router-dom";

//header that always shows on top bar

function Header() {
    return (
        <div className="blue-header-bar">
        <NavLink to="/">
        <img className="home-logo" src={homeLogo} alt="a home btn" />
        </NavLink>
        </div>
    )}

export default Header;