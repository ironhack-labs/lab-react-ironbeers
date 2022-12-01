import './NavBar.css'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to={'/'} className='text-decoration-none'>
                    <Navbar.Brand>IronBeers</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar