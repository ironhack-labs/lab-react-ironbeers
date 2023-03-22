
import { Link } from 'react-router-dom'
import home from '../../../assets/home-logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <h1>Ironbeers</h1>
            <Link to="/home" className="navbar-brand">
                <img src={home} alt="Logo" width="30" height="24" className="nav-image"/>
            </Link>
        </div>
    </nav>
  )
}