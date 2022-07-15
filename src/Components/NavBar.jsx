import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="">BeerHome</Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/beer">
                            <Nav.Link href="">Beer</Nav.Link>
                        </Link>
                        <Link to="/random-beer">
                            <Nav.Link href="">Random Beer</Nav.Link>
                        </Link>
                        <Link to="/new-beer">
                            <Nav.Link href="">New Beer</Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar