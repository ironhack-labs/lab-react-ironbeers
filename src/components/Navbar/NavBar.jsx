import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Container className='mb-5 d-flex justify-content-center'>
            <NavLink to='/'>
                <Navbar.Brand>
                    <img
                        src="/logo512.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </NavLink>
        </Container>
    )
}

export default NavBar