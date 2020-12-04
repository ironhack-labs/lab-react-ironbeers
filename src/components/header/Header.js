import React from 'react'

import { Navbar } from 'react-bootstrap'
import './Header.css'

import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <Navbar bg="primary" className="header">
            <Navbar.Brand>
                <Link to={'/'}>
                    <img src="./../../../images/home.png"/>
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}



export default Header