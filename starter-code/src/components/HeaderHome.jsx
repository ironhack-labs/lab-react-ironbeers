import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function HeaderHome() {
    return (
        <div>
            <header className='header'>
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
            </header>
        </div>
    )
}
