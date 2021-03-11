import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <Link to={'/home'}>
                        <img src="../images/home.png" alt="Logo" width="30" height="24" className="d-inline-block align-middle" />
                    
                    </Link>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
