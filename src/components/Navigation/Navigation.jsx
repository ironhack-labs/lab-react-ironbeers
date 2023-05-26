import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar