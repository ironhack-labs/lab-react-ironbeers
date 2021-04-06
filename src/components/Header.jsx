import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCamera} from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    return (
        <div className="Header">
            <Link to='/' style={{ color:'#f7f9f9'}}>HOME
   

            </Link>

        </div>
    )
}

export default Header;