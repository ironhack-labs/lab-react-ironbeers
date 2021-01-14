import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav>
                <Link to='/'><img src={process.env.PUBLIC_URL + '/logo192.png'} alt="small house icon" className='house-icon' /></Link>
            </nav>
        </div>
    );
}

export default Navbar;