import React from 'react'
import {NavLink} from "react-router-dom";
import '../styles/nav.css';

const NavMain = () => {
    return (
            <nav className="nav-main">
                <NavLink to="/" >
                <i className='fa fa-home'></i>  
                </NavLink>
            </nav> 
    )
}

export default NavMain
