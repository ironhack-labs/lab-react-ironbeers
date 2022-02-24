import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import home from "../../assets/kindpng_608406.png"
const Nav = () =>{

    return(
        <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" >
                            <img src={home} className="d-inline-block align-top " alt="home logo" />
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default Nav