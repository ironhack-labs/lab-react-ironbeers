import { Link } from "react-router-dom";
import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar nav-bg-color">
            <div className="container">
                <div className="navbar-pos">
                    <Link to="/">
                            <img className="logo" src="/home-icon.svg" alt="home-icon" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
