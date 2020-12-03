import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="info" variant="info" className="navigation">
            <Navbar.Brand>
                <Link to='/'>
                    <img alt="Home" src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg" className="d-inline-block align-top" />
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Navigation