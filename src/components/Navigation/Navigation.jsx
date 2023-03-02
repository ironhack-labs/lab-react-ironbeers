import { Container, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <Navbar bg="dark" >
            <Container className="justify-content-center">
                <Link to='/'>
                    <Navbar.Brand as='div'>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/931/931949.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default Navigation