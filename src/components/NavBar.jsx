
import { Navbar, Container, Nav, } from "react-bootstrap"
import { Link } from "react-router-dom"
import homeIcon from './../assets/home.png'


const NavBar = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Link className="container" to={'/'}>
                    <img className="home" src={homeIcon} alt="img" />
                </Link>
            </Container>
        </Navbar>
    )
}



export default NavBar