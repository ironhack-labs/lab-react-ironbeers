import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar () {
    return (
        <Link to={"/"}>
        <div className="columns is-vcentered navbar is-info">
        <div className = "column">
               <i className="fas fa-home icon is-large has-margin-top-10"></i>
        </div>
        </div>
        </Link>
    );
}
