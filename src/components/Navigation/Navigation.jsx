import { NavLink } from "react-router-dom"
import { Nav, Container, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div className='Navbar'>
            <Navbar bg="primary" variant="primary">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default Navigation