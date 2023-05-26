import { Link } from 'react-router-dom'
import headerBanner from '../../assets/header.png'
import './Header.css'

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${headerBanner})`
    }

    return (
        <Link to="/">
            <header className="header" style={headerStyle} />
        </Link>
    )
}

export default Header
