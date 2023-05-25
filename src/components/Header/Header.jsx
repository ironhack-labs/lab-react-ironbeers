import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"


const Header = () => {


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/">🍺</Link>
                </Nav>
            </Container>
        </Navbar>


    )
}

export default Header

