import React from 'react'

import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <Link className="fluid-container " to="/">
            <nav className="row d-flex align-items-center">
                <i className="fas fa-home col d-flex justify-content-center"> </i>
            </nav>
        </Link>
    )
}

export default navbar
