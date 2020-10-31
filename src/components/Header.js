import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link>
                <div className="container">
                    <img src="./home.png" alt ="home"/>
                </div>
            </Link>
        </div>
    )
}

export default Header