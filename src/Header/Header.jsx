import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="header">
            <Link to='/'><p>Home</p></Link>
            <Link to='/random-beer'><p>Random Beer</p></Link>
            <Link to='/new-beer'><p>New Beer</p></Link>
            <Link to='/beers'><p>Beers</p></Link>
        </nav>
    )
}

export default Header