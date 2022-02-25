import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <nav className="header">
            <Link className='link_white' to={'/'}><i>⌂</i></Link>
        </nav>
    )
}

export default Header