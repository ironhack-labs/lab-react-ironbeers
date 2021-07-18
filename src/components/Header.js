import React from 'react';
import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'

function Header() {
    return (
        <Navbar className="navbar"  bg="info"  expand="lg">
            <Link className="icon-home" to="/"><i class="fas fa-home"></i></Link>        
        </Navbar>
        )
    }
export default Header;
