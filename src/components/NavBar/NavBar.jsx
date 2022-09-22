import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand as={'span'}>
                    <Link to={'/home'} className='beer-navbar'>IronBeers</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={'span'}>
                            <Link to={'/beers'} className='beer-navbar'>All beers</Link>
                        </Nav.Link>
                        <Nav.Link as={'span'}>
                            <Link to={'/randombeer'} className='beer-navbar'>Random Beer</Link>
                        </Nav.Link>
                        <Nav.Link as={'span'}>
                            <Link to={'/newbeer'} className='beer-navbar' >New Beer</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;