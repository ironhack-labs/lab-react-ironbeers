import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <Navbar>
            <Link to='/'>
                <img src="../../../../nav.png" alt="Nav img" />
            </Link>
        </Navbar>
    )
}

export default Navigation