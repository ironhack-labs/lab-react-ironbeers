import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './logo.svg';

const NavBar = () => {
    return (
        <div className="nav-bar">
        <NavLink exact to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        </div>
    )
}

export default NavBar
