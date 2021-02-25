import { Navbar } from 'react-bootstrap'
import logo from './logo.png'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" className="d-flex justify-content-center">
            <Link to="/"><Navbar.Brand><img
                alt="logo"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block"
            /></Navbar.Brand></Link>
        </Navbar>
    )
}

export default Header