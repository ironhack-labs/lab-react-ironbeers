import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink to='/' exact >Home</NavLink>
          
        </Navbar>
    )
}

export default Header