import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as="span">IronBeers</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/home">Home</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/beers">Beers</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/random">Random</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/create">Create</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
