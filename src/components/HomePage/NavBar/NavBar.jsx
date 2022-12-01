import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link, Router } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">Iron Beers</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/beers">
                            <Nav.Link as="div">Beers</Nav.Link>
                        </Link>
                        <Link to="/random-beer">
                            <Nav.Link as="div">Random Beer</Nav.Link>
                        </Link>
                        <Link to="/new-beer">
                            <Nav.Link as="div">New Beer</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation