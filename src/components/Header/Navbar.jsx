import { Navbar, Container} from "react-bootstrap";
import { NavLink } from 'react-router-dom'

function Homelink() {
    return (
        <Navbar expand="lg" variant="light" bg="primary">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand >
                        <img
                            src="/images/nav.png"
                            width=""
                            height="30"
                            className="d-inline-block align-top"
                            alt="home logo"
                        />
                    </Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default Homelink;
