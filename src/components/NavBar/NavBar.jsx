import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">IronBeers App</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/beers">
                            <Nav.Link as="div">Galería</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
