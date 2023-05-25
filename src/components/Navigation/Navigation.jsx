import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="me-auto">
                    <Nav.Link as="span">
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation