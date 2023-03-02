import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container >
                <Nav className="me-auto">
                    < Link to="/" >
                        <Nav.Link as="span">Home Page</Nav.Link>
                    </Link >
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation


