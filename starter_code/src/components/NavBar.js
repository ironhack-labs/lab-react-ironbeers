import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#32c3ff' }}>
            <Link to={'/'} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="align-item">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /><path d="M0 0h24v24H0z" fill='none' />
                </svg>
            </Link>
        </nav>
    )
}
