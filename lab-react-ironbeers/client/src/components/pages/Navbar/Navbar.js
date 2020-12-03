import './Navbar.css';
import { NavLink } from 'react-router-dom'

const navbar = () => {

    return (

        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to="/" className="wikilink">IronBeers</NavLink>
            </div>
        </nav>

    )
}

export default navbar