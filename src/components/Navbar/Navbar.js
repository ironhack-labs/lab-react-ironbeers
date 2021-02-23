import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-dark" style={{backgroundColor:"#3FC4FC"}}>
            <Link to="/">
                <p className="navbar-brand">HOME</p>
            </Link>
        </nav>
    )
}

export default Navbar;