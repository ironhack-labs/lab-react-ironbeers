import { Nav, Container, Navbar as BoostrapNavbar  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <BoostrapNavbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <BoostrapNavbar.Brand as="div">Beers </BoostrapNavbar.Brand>
                </Link>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/beers">
                            <Nav.Link as="div">Beers List</Nav.Link>
                        </Link>
                        <Link to="/random-beer">
                            <Nav.Link as="div">Random Beer </Nav.Link>
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    )
}

export default Navbar


