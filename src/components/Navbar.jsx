import { Link } from 'react-router-dom';
import imgHeader from "../assets/home-blue.png"

function Navbar() {
    return (
        <nav>
        <Link to="/">
          <img
            src={imgHeader}
            alt="example"
          />
        </Link>
            {/* <ul>
                <li><Link to ={"/"}>Home</Link></li>
            </ul> */}
        </nav>
    );
}

export default Navbar;