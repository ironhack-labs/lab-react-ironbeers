import { Navbar,Nav,Container} from "react-bootstrap"
import {Link} from 'react-router-dom'
const NavBarFixed = () =>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link to='/'>Inicio</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarFixed