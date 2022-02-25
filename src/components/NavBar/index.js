import { Link } from 'react-router-dom';
import './styleNav.css'

const Navbar = () => {
        return(
            <div className='NavBar'>
            <header>
                <Link className='nav-link' to='/' style={{ textDecoration: 'none' }}>
                    ⌂
                </Link>
                </header>
            </div>
        )
};

export default Navbar;