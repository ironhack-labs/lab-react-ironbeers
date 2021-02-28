import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import home from "../assets/descarga.png"


function Header() {
    return (
        <div className="header">
       
<NavLink activeClassName="selected-link" exact to="/"> <img className="header-image" src={home} /></NavLink>
 
        </div>
    )
}

export default Header











