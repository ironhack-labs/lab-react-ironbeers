import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <Container>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header