import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='Header'>
        <Link to='/'>
            <h3><span>🍺</span> Hey you, beer me ... <span>🍺</span></h3>
        </Link>
        </div>
    )
}
