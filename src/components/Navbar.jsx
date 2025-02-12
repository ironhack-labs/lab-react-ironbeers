import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Using react-icons for the home icon
import "../App.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <FaHome className="home-icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
