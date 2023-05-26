import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" className='mb-5'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar