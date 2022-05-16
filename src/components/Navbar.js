import './navbar.css'
import { Router, Navlink } from 'react-router'

const Navbar = (() => {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <a href={'/'}>Homepage</a>
                <a href='/beers'>All Beers</a>
                <a href='/beers/random'>Random Beer</a>
                <a href='/beers/new'>New Beer</a>
            </div>
        </div>
    )
})

export default Navbar