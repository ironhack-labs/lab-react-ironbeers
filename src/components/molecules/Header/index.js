import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../../../assets/home-icon.png'
import './header.css'

const Header = () =>{
    return (
        <>
            <header className="header">
                <Link to='/'> 
                    <img src={homeIcon} alt="home-icon" className="home-icon"/>
                </Link>
            </header>
        </>
    )
}

export default Header