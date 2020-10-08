import React from 'react';
import { Link } from "react-router-dom";
import "../styles/header.css";


const Header = () => {
    return (
        <div id="header">
            <Link to="/">
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559065.jpg" alt="logo" width="70px"/>
            </Link>
        </div>
    )
}

export default Header
