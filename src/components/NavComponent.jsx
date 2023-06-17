import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import homePic from "../assets/home.png"

function NavComponent() {
    return (
        <Navbar bg = "primary">
            <Container className='d-flex justify-content-center'>
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={homePic}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )

}

export default NavComponent