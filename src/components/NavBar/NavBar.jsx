import './NavBar.css'

import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className='no-text-decoration'>
                    <span className="navbar-brand mb-0">ironReers</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar