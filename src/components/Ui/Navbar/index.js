import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import "./Navbar.css"

import home from "./images/home.png"
import { NavLink } from "react-router-dom"

const Navigation = () => {

    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="navbar-main">
            <NavLink className="navbar-main" to="/"><img className="icon" src={home} alt="home-logo"/></NavLink>
        </Navbar>
    )
}

export default Navigation