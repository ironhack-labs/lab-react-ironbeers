import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand><Link to={'/'}>IronBeers</Link></Navbar.Brand>
        </Navbar>

    )
}

export default Header