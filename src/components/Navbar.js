import React from 'react';
import { Navbar} from 'react-bootstrap'
import imgNavbar from '../assets/navbar.png'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <Navbar className="nav">
                <Link to= "/" img src={imgNavbar} alt="imagen"> </Link>
            </Navbar>
        </div>
    )
}

export default Nav