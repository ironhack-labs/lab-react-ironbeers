import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as="span">Iron Beers</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/">Home</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar