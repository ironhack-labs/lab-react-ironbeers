import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className= "header">
            <Link to= "/"><img src="../logo192.png" alt=""/></Link>
        </div>
    )
}

export default Header
