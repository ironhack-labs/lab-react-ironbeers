import React from 'react'
import homeIcon from "./../assets/home.png"
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="img-header" src={homeIcon} alt='home-button'/>
            </Link>
        </div>
    )
}
