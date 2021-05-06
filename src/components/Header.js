import React from "react"
import { Navbar } from "react-bootstrap"
import { HouseDoorFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <Navbar className="header">
            <Link to="/">
                <HouseDoorFill className="homeIcon" />
            </Link>
        </Navbar>
    )
}

export default Header