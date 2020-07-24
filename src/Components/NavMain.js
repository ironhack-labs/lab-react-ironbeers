import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../images/3668851-512.png"

function NavMain() {
    return (
        <header className="header-main">
          <NavLink exact to="/">
            <img src={img} className="logo-img"/>
          </NavLink>
    </header>
    )
}

export default NavMain
