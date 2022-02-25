import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar className="container-fluid navbar navbar-expand-lg navbar-dark bg-primary">
       <Container>
         <NavLink className="text-decoration-none" to="/">
            <Navbar.Brand as="span">LAB | React IronBeers</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <NavLink className="text-decoration-none" to="/beers">
                  <Nav.Link as="span">All Beers</Nav.Link>
              </NavLink>
              <NavLink className="text-decoration-none" to="/random-beer">
                  <Nav.Link as="span">Random Beer</Nav.Link>
              </NavLink>
                <NavLink className="text-decoration-none" to="/new-beer">
                  <Nav.Link as="span">New Beer</Nav.Link>
              </NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
  );
}

export default Navigation


