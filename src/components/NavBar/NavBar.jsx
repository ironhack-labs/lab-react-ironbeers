import HomeIcon from './../../assets/HomeIcon.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className='mb-4 NavBar'>
            <Container className='justify-content-center'>
                <Link to="/">
                    <Navbar.Brand as="span" ><img src={HomeIcon} alt="Home icon" /></Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar