import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
        <div style={{backgroundColor:"lightblue", height:"5vh"}}>
        <Link to="/">
            <img src="/images/home.png" alt="home" height="10vh"/></Link>
            </div>
        </nav>
    )
}

export default NavBar;