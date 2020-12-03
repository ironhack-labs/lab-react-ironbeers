import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="info" variant="info" className="navbar">
            <Navbar.Brand>
                <Link to='/'>
                    <img alt="Home" src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg" className="d-inline-block align-top icon"/>
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar 