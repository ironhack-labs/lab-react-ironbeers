import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Link to="/" className='link'>
            <Navbar bg="warning">
                <h4 className='mx-auto'>Go Home</h4>
            </Navbar>
        </Link>
    )
}

export default Header