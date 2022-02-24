import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <NavLink to='/'>
            <Navbar bg="info">
                <Navbar.Brand>
                    <img src="" alt="" />
                </Navbar.Brand>
            </Navbar>
        </NavLink>

    )
}

export default NavBar 