import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const Header = () => {

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">IronBeers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'}>Home</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header