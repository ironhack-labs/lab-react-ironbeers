import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="nav-bar">
                <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
            </nav>
        </>
    );
}