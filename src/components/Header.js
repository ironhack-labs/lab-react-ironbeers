import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='NavBar'>
                <NavLink to='/beers'>Beers</NavLink>
                <NavLink to='/random-beer'>Random-beer</NavLink>
                <NavLink to='/new-beer'>New Beer</NavLink>
            </nav>
        </>

    )
}

export default Header;