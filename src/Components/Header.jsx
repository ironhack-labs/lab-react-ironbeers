import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">
            <img className="home-header" src="home-header.png" alt="home"/>
            </Link>
        </div>
    )
}

export default Header
