import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'><NavDropdown.Item as='span'>IronBEERS</NavDropdown.Item></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <Link to='/all'><NavDropdown.Item as='span'>All Beers</NavDropdown.Item></Link>
                                <Link to='/random'><NavDropdown.Item as='span'>Random Beer</NavDropdown.Item></Link>
                                <Link to='/new'><NavDropdown.Item as='span'>New Beer</NavDropdown.Item></Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation