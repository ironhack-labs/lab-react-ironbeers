import './Header.css'
import { Link } from 'react-router-dom'

import HomePage from '../../pages/HomePage/HomePage'


const Header = () => {

    return (

        <div className="header">
            <Link to="/">SOY EL HEADER</Link>
        </div>

    )
}

export default Header