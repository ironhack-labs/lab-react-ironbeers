import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link className="link" to="/">
                    <Navbar.Brand as="div">IronBeers</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="link" to="/beers">
                            <Nav.Link as="div">Our Beers</Nav.Link>
                        </Link>
                        <Link className="link" to="/random">
                            <Nav.Link as="div">RandomBeer!</Nav.Link>
                        </Link>
                        <Link className="link" to="/new">
                            <Nav.Link as="div">New Beer</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation