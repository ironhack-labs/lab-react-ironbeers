import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="primary" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">Ironbeers</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default Navigation