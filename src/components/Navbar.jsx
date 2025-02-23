import { Link } from 'react-router-dom'
import homeIconImgUrl from '../assets/home-icon.png'


function Navbar() {

    return (
        <header>
            <nav className='navbar'>
                <Link to='/'><img src={homeIconImgUrl} alt="home-icon" height='50'/></Link>
            </nav>
        </header>
    )
}

export default Navbar;
