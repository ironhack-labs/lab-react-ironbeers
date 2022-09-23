import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as="span">IronBeers</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link className='link' to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link className='link' to='/beers'>All Beers</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link className='link' to='/beers/random'>Random Beers</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link className='link' to='/beers/create'>Create Beers</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}

export default NavbarComponent;