import { Link } from "react-router-dom";
import React from "react";
import homeIcon from "./../assets/home-icon.png";

function Navbar() {
    return (
        <nav style={{background: "blue"}}>
            <Link to="/" className="navbar-brand">
                <img src={homeIcon} />
            </Link>
        </nav>
    )
}

export default Navbar;
