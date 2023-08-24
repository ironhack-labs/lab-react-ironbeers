import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import iconHome  from './../assets/home-icon.png'

const Navigation = () => {

    return (
        <Navbar bg="info text-center" data-bs-theme="blue" className='mb-5' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'><img src={iconHome} alt=""></img></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
