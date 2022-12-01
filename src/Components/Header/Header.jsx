import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <Navbar className='header'>
            <Link to="/">
                <Navbar.Brand as="div">IronBeers</Navbar.Brand>
            </Link>

        </Navbar>

    )
}

export default Header