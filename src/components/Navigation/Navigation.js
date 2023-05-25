import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navigation(){
    return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                 <Nav.Link as={"span"}> 
                  <Link to={'/'}>
                    HOME
                  </Link>
                 </Nav.Link> 
            </Container>
          </Navbar>
    )
}