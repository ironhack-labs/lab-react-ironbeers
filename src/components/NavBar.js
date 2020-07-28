import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="mx-auto" to="/">
                <span className="text-white"><i className="fa fa-home" style={{fontSize:"48px"}}></i></span>
            </Link>
        </nav>
    )
}

export default NavBar
