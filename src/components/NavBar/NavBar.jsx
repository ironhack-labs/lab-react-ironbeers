
import { NavLink } from "react-router-dom";

import { Navbar, Container, NavDropdown, Nav} from "react-bootstrap"


const Navigator = () => {

  return (
    <Navbar bg="dark" expand="lg" variant='dark' fluid='md'>
          <Container>
              
              <NavLink to='/' className='link-decoration'>
                  <Navbar.Brand as='div'>IronBeers</Navbar.Brand>                  
              </NavLink>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />              
              <Navbar.Collapse id="basic-navbar-nav">                  
                  <Nav className="me-auto">
                      
                      <NavLink to='/' className='link-decoration'>                          
                          <Nav.Link as='div'>Home</Nav.Link>                          
                      </NavLink>
                      
                        
                      <NavLink to='/all' className='link-decoration'>
                          <Nav.Link as='div'>Nuestras Cervezas</Nav.Link>                          
                      </NavLink>       

                  </Nav>                  
              </Navbar.Collapse>              
          </Container>          
      </Navbar>      
  )
}

export default Navigator