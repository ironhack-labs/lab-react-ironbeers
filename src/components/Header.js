import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo192.png'

export default function Header() {
    return (
        <nav>
            <Link to='/'><img src={logo}/></Link>
        </nav>
    )
}
