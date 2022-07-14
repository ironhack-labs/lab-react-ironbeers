import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">IRONBEERS</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar