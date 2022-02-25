import { Navbar, Container } from "react-bootstrap"
import './nav.css'
import { NavLink } from "react-router-dom"

const NavUT = () => {
   return ( <Navbar className="backNav">
    <Container>
        <NavLink to={'/'}>
      <Navbar.Brand >🏠</Navbar.Brand>
      </NavLink>
    </Container>
    </Navbar> )
}

export default NavUT