
import Home from '../assets/home-icon.png'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        < div className='Home' style={{ backgroundColor: 'blue' }}>
            <Link to={'/'}>
                <img src={Home}></img>

            </Link>
        </div>
    )
}

export default Navbar
