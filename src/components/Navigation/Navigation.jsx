import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant='dark' expand="lg" style={{ marginBottom: 30 }}>
                <NavLink to="/">
                    <Navbar.Brand as="span">IronBeers</Navbar.Brand>
                </NavLink>

        </Navbar>
    )
}

export default Navigation