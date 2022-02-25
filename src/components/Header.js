
//Header.js

import homeIcon from '../assets/homeicon.jpg';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <Link to="/">
            <div className="Header">
                <img src={homeIcon} alt="home-icon" />
            </div>
        </Link>
    );
}

export default Header;