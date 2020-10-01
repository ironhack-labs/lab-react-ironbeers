import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Header = () => {
    return (
        <div className='bg-primary text-center py-3'>
            <Link to='/'>
                <i className="fa fa-home icon-color fa-3x" aria-hidden="true"></i>
            </Link>
        </div>
    );
};

export default Header;