import { Link } from 'react-router-dom';
import navBarImg from '../assets/home-icon.png'
Link
function Navbar() {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to="/"><img src={navBarImg} alt="home icon" /></Link>
                
            </div>
        </nav>
    )
}

export default Navbar;
