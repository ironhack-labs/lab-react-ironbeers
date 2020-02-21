import React from "react";
import {NavLink} from "react-router-dom";

export default function NavMain() {
    return(
        <nav className="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/all-beers">All</NavLink>
            <NavLink to="/random-beer">Random</NavLink>
            <NavLink to="/new-beer">Add</NavLink>
        </nav>
    )
}
