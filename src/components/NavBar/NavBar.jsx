import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container className='justify-content-center'>
                <Link to="/" className='text-decoration-none'>
                    <Navbar.Brand as="span" href="/">Home</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar