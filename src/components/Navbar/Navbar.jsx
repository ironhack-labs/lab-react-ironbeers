import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./Navbar.css"

function Home() {

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="Home" >🍻</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Home;