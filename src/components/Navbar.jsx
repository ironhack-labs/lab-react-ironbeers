import { Link } from "react-router-dom"
import home from '../assets/home-icon.png'

function Navbar() {
    return (
        <div>
            <nav className="nav-color">
                <Link to={'/'}>
                    <img src={home} alt="home" />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
