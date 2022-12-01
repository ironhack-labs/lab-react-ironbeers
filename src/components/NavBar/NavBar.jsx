import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBar() {
    return (

        <Navbar bg="dark" expand="sm" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">Home</Navbar.Brand>
                </Link>
                <Link to="/beers">
                    <Navbar.Brand as="div">Beers</Navbar.Brand>
                </Link>

                <Link to="/random-beer">
                    <Navbar.Brand as="div">Random Beer</Navbar.Brand>
                </Link>
                <Link to="/new-beer">
                    <Navbar.Brand as="div">New Beer</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>

    );
}

export default NavBar