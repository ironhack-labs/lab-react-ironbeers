import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    document.querySelector('html').classList.add('has-navbar-fixed-top')

    return (
        <div>
            <nav className="navbar"> 
                <NavLink className="navbar-brand" exact to='/'>
                    <FontAwesomeIcon icon={faHome} size="3x"/>
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar
