import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/" className="header">Back to homepage</Link>
        </div>
    )
}

export default Header
