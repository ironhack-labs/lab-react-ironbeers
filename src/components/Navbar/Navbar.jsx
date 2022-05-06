import { Navbar, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './Navbar.css'


const Nav = () => {

    return (
        <Navbar bg="dark" expand="lg" className="navbarIronbeers">
            <Container>
                <Link to='/'> Ironbeers </Link>
            </Container>
        </Navbar>
)
}

export default Nav