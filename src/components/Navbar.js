import { NavLink } from 'react-router-dom'
import houseImg from '../assets/house-door-fill.svg'

function Navbar () {
    return (
        <nav>
            <NavLink to='/'>
                <img src={houseImg} alt='house' />
            </NavLink>
        </nav>
    )
}
export default Navbar;  