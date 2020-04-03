import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./nav.css"
export function Nav() {
    return (
        <div class="navBar">
            <Link to="/" className="homeLink">⌂</Link>
        </div>
    )
}

export default Nav;