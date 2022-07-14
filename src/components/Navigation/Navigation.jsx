import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import navImage from './../../assets/nav.png'

function Navigation() {
    return (
        <Navbar expand="lg" variant="light" bg="primary" >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand >
                        <img
                            src={navImage}
                            width=""
                            height="30"
                            className="d-inline-block align-top"
                            alt="home logo"
                        />
                    </Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default Navigation;