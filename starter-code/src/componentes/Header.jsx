import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom"
const Header = () => {
    const location = useLocation();
    if (location.pathname === '/') {
        return (<></>)
    } else {
        return (
            <div className="bg-primary d-flex align-items-center p-4 justify-content-center">
                <Link to='/' ><FontAwesomeIcon icon={faHome} className="fa-2x text-white" /></Link>
            </div>
        )

    }
}
export default Header