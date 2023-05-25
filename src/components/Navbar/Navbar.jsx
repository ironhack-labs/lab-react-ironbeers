import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";

function Navigation() {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/">🍺</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation