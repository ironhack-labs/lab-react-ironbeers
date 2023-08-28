import { Link } from "react-router-dom";
import { Container, Navbar} from 'react-bootstrap';

function NavBar() {


    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-center">
                <Link to={'/'} className="navbar-brand">
                    Return to home
                </Link>
            </Container>
        </Navbar>
    );

}

export default NavBar;