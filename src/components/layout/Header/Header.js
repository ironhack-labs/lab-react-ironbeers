import { Navbar } from 'react-bootstrap'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header


