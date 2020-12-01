import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to="/">
            <img src={props.location} alt="home"/>
            </Link>
        </div>
    )
}

export default Header
