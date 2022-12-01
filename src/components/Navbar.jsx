import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <Navbar bg='primary' variant='primary'>
            <Container className='justify-content-center'>
                <Nav>
                    <Nav.Link as='span'>
                        <Link style={{ color: 'white', textDecoration: 'none' }} className='link-navbar' to='/'>
                            Home
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;