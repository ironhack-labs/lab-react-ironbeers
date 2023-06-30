import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="navLink">
        Home Page
      </Link>
    </nav>
  );
}

export default Navbar;
