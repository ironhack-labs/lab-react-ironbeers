import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBarBeers() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as="span">Iron Beers</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as='span'>
                            <Link className='link-Nav' to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-Nav' to="/randomBeer">Random Beers</Link>
                        </Nav.Link>
                        <Nav.Link as='span'>
                            <Link className='link-Nav' to="/newBeer">New Beer</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavBarBeers;