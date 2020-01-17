import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar () {
    return (
        <Link to={"/"}>
        <div className = "navbar is-info has-padding-top-10 has-padding-bottom-10">
               <i className="fas fa-home icon is-large has-image-centered"></i>
        </div>
        </Link>
    );
}
