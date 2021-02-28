import React from 'react';
import { Link } from 'react-router-dom'
import header from './../../assets/header.png'

function Header() {
    return (
        <div className="container">
            <Link to="/"><img id="homePageImg" src={ header } alt="viewsHeader"/></Link>
        </div>
    )
}

export default Header;
