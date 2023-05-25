import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './navBar.css'


function Navigation() {

    return (
        <>
            <Navbar bg="secondary">
                <Container>
                    <Nav>
                        <Link className="NavBarIcon" to="/">🏠
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation

