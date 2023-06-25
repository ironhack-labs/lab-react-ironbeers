import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      data-bs-theme="dark"
      className="NavBar"
    >
      <Container>
        <Navbar.Brand href="/">🍺IronBeer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to={"/beers"}>
              All the Beers
            </Nav.Link>
            <Nav.Link as={Link} to={"/random"}>
              Random Beer
            </Nav.Link>
            <Nav.Link as={Link} to={"/new"}>
              New Beer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
