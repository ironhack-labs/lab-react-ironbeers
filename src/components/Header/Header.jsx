import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Link to={'/'}>
            <Navbar bg="primary" expand="lg" className='mb-4'>
                <Container className="justify-content-center">
                    <Navbar.Brand bg='primary'>Home</Navbar.Brand>
                </Container>
            </Navbar>
        </Link>
    )
}

export default Header