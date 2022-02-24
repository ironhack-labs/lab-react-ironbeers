import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


function Navbarapp() {

    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="mx-auto">
                    <NavLink to='/'>
                        <Nav.Link as='span'>Home</Nav.Link>
                    </NavLink >
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navbarapp