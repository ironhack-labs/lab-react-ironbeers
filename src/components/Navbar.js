import { NavLink } from 'react-router-dom';
import icon from '../assets/home-icon.png';

function Navbar() {
    return (
        <NavLink to="/" >
            <nav className='col text-center mt-1 mb-3'>
                <img src={icon} alt='' className='card-img pt-2 pb-2 rounded' />
            </nav>
        </NavLink>
    )
}

export default Navbar;