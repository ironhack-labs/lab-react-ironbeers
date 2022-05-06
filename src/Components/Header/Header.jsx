import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"





const Header = () => {


    return (

        <Navbar bg="light">
            <Container>
                <Link to="/">
                    <Navbar.Brand>Brand link</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>


    )

}

export default Header
