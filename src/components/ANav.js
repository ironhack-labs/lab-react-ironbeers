import React from 'react'
import {Link} from 'react-router-dom'

function ANav(props) {
    return (
            <nav className="nav-bar">
                <Link to="/">     
                    <img src='/images/home.svg' alt="home img"/>     
                </Link>              
            </nav>         
    )
}

export default ANav