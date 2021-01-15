import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav>
                <Link to='/'><img src={'/images/house.png'} alt="small house icon" className='house-icon' /></Link>
            </nav>
        </div>
    );
}

export default Navbar;