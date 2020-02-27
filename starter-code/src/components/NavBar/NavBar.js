import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <Link className='navbar' to='/'><img src='./images/home-24px.svg'></img></Link>
    )
}

export default NavBar