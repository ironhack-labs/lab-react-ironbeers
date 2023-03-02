import { Link } from "react-router-dom"
import { Nav, Navbar, Container, } from 'react-bootstrap'
import homeIcon from '../../assets/home.png'

const Header = () => {



    return (
        <Navbar bg="dark">
            <Container className="justify-content-center">
                <Link to="/">
                    <Navbar.Brand >
                        <img src={homeIcon} alt="Home" />
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>


    )
}

export default Header