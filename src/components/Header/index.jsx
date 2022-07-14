import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import homeIcon from './../../assets/Home-icon.png'

const Header = () => {

    return (
        <Link to="/">
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand className='m-auto'>
                        <img
                            src={homeIcon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Home Icon"
                            style={{ filter: 'invert(1)' }}
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Link>
    )
}

export default Header