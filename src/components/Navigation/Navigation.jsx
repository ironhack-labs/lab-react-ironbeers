import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Brand href="/">Beer-mania</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>
                        <Link to="/allBeers">
                            <Nav.Link as="span">All beers</Nav.Link>
                        </Link>
                        <Link to="/randomBeer">
                            <Nav.Link as="span">Random beer</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation