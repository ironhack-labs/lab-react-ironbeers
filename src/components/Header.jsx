import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <nav className="Header navbar navbar-dark bg-primary justify-content-center" >

            <Link to='/' >
                <FontAwesomeIcon icon={faHome} size="3x" color="white" />
            </Link>


        </nav>


    )
}
export default Header;