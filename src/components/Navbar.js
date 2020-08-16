import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NaviBar = () => {
    return (
        <Navbar bg="primary" variant="top">
            <Link to="/">
            <span><FontAwesomeIcon style={{color:'white'}} icon={faHome} /></span>
            </Link>
        </Navbar>
    )
}

export default NaviBar
