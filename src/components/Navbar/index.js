import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <Link className="Navbar" to="/">⌂</Link>
    </nav>
  );
}
