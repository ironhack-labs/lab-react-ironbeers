import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <div className='Navbar' style={{backgroundColor: 'blue'}}>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Navbar