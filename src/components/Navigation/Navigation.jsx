import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as="span"><Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span"><Link to="/beer">Beers</Link></Nav.Link>
                        <Nav.Link as="span"><Link to="/random-beer">Random Beer</Link></Nav.Link>
                        <Nav.Link as="span"><Link to="/create-beer">Create</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation