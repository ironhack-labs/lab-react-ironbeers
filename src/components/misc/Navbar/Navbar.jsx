import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/home" className="navbar-brand">
                {/* <img src={home} alt="Logo" width="30" height="24" className="nav-image"/> */
                <i className='bx bx-home bx-burst bx-rotate-90 bx-lg'></i>}
            </Link>
        </div>
    </nav>
  )
}