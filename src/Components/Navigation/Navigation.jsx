import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant='green' expand="lg" style={{ marginBottom: 30 }}>
            <Container>

                <NavLink to="/">
                    <Navbar.Brand as="span">HOME</Navbar.Brand>
                </NavLink>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/galeria">
                            <Nav.Link as="span">Listado cervezas</Nav.Link>
                        </NavLink>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation