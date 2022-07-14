import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Nav className=" homeIcon">
                    <Link to="/">
                        <Nav.Link as="span">⌂</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header