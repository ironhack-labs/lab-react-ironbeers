import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Nabar() {
    return (
        <nav className="nav-bar bg-primary">
            <Link to="/">
            <img style={{width:'2.5em'}} className="navbar-brand" src="../../home-logo.png" alt=""/>
            </Link>
        </nav>
    )
}
