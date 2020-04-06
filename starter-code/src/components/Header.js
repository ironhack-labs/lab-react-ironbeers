import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <div className="bg-info d-flex p-2 justify-content-center">
            <Link to='/' ><FontAwesomeIcon icon={faHome} className="text-white fa-2x"/></Link>
        </div>
    )
}