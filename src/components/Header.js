import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <Link to="/" style={{ display: 'block' }} className="btn btn-info btn-sm">Home</Link>
        </>
    )
}

export default Header