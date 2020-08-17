import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav className="justify-content-center" variant="primary">
            <Link to="/"> 
                <FontAwesomeIcon icon={faHome} />
            </Link>
        </Nav>
    )
}

export default Navbar
