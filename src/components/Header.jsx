import React from 'react';
import { Link } from "react-router-dom";
import "../styles/header.css";


const Header = () => {
    return (
        <div id="header">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png" alt="logo" width="70px"/>
            </Link>
        </div>
    )
}

export default Header
