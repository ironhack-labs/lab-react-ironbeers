import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navbar = () => {

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default navbar 