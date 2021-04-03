import React from 'react'

import {Link} from "react-router-dom"
import { FaBeer } from 'react-icons/fa';

import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar__style">
            <div className="container-fluid">
                <Link to="/"> <h2 className="brand__style"> <FaBeer/> </h2> </Link>
            </div>
        </nav>
    )
}

export default Navbar