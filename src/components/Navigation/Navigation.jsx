import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand as='div'>Home</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link to='/'>
                        <Nav.Link as='div'>AllBeers</Nav.Link>
                    </Link>
                    <Link to='/'>
                        <Nav.Link as='div'>Random Beer</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation