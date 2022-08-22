import { Link } from "react-router-dom";
import homeSymbol from "../assets/home.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <Link to="/">
        <button>Home</button>
      </Link>
    </nav>
  );
}

export default Navbar;
