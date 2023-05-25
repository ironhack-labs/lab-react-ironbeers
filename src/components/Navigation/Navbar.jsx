import './Navbar.css';
import navbarLogo from './../../assets/navbar.png';
import { Navbar, Container } from 'react-bootstrap';

const NavbarHeader = () => {

    return (

        <Navbar bg='success' expand="lg" className='mb-5'>
            <Container className="d-flex justify-content-center align-items-center">
                <Navbar.Brand href="/">
                    <img
                        src={navbarLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;
