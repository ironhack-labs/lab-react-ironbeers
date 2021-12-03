import React from 'react';
import { NavLink } from 'react-router-dom';
import imgHeader from "../assets/header.png"


function Header() {
    return (
        <div>
            <NavLink to="/">
                <img src={imgHeader}/>
            </NavLink>

        </div>
    )
}


export default Header 
