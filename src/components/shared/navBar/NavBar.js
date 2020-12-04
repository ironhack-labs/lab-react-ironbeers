import { Link } from 'react-router-dom'
import { Navbar } from "react-bootstrap"

import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar bg="dark" sticky="top">
            <Link className='nav-links' to={'/'}>React IronBeers</Link>
            <Link className='nav-links' to={'/beers'}>List</Link>
            <Link className='nav-links' to={'/random-beer'}>Random Beer</Link>
            <Link className='nav-links' to={'/new-beer'}>New Beer</Link>
        </Navbar>
    )
}

export default NavBar