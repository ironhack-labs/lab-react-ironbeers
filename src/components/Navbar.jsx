import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <nav >
                <Link to="/">
                    <img className="navbar-image" src="../src/assets/home-icon.png" />
                </Link>
            </nav>
        </div>
    )
}
export default Navbar
