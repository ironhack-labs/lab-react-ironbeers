import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">
                        Home
                    </Link>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
