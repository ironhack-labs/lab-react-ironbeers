import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import './NavBar.css'
const NavBar = () => {

    return (

        <Navbar className='NavBar'>
            <Container>
                <NavLink className='navlink' to='/'>
                    <Navbar.Brand>Home</Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default NavBar