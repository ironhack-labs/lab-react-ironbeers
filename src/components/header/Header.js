import React from 'react';
import './Header.css';
import house from '../../assets/home.png';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <Link className='header' to={'/'}>
                <img src={house} alt='icon' />
            </Link>
        </>
    )
}
