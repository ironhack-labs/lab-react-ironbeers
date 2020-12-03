import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header>
            <nav className="navbar navbar-light">
            <Link className="navbar-brand mx-auto d-block" to="/">
                <img src="../../../home.png" width="80" height="60" alt="header"/>
            </Link>
            </nav>
        </header>

    )
}

export default Header