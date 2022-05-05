import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <Navbar bg="dark" variant='dark' expand="lg" style={{ marginBottom: 30 }}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="span">Home</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </Container>
        </Navbar>
    )
}

export default Header