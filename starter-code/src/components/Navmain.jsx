import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavMain() {
    return (
        <nav id = "nav-main">
      
        <NavLink exact to= "/"> <i className="fa fa-home" aria-hidden="true"></i></NavLink>
        </nav>
    )
}