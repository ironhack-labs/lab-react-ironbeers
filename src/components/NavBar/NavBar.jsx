import React from 'react';
import './NavBar.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div ClassName='NavBar'>
            <Link to='/'>
                <div className='background__nav d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faHome} size="4x" color="white"/>
                </div>
            </Link>
        </div>
    );
};

export default NavBar;