import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link to = '/'>
                <h2 style={{color: 'white'}}>Click y te llevo a home :D</h2>
            </Link>
        </nav>
    )
}

export default Navigation