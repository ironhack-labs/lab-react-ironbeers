import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div className="nav-div">
            <nav className="navbar navbar-light">
                <div className="container-fluid justify-content-center">
                <NavLink to="/">
                <i className='fa fa-home' style={{color: 'white'}}></i>
                </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar