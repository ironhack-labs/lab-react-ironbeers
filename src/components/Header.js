import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const Header = () => {
    return (
        <header>
            <Link to="/">Home!</Link>
        </header>
    );
};

export default Header;