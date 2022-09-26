import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/beers">Beers</Nav.Link>
                    <Nav.Link href="/random-beer">Random-beer</Nav.Link>
                    <Nav.Link href="/new-beer">New-beer</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
