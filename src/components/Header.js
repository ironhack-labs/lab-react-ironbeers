import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const imgUrl = '../public/home.ico'

    return (
        <div>
            <Link to={'/'}>
                <img src={imgUrl} alt="home" />
            </Link>
        </div>
    )
}

export default Header;

