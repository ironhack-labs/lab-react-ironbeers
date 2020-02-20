import React from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from "react-router-dom";

export default function NavMain() {
    return (
        <nav className="nav-main">
            <NavLink exact to="/">
            <FontAwesome
                size="4x"
                name="home"
                style={{color:'white'}}
                ></FontAwesome>
            </NavLink>
        </nav>
    )
}
