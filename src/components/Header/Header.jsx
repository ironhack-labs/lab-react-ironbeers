import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const Header = () => {

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to={'/'}>IronBeers</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export default Header