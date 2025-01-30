import house from "../assets/home-icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-primary d-flex justify-content-center p-3">
      <Link to="/">
        <img src={house} alt="icon" style={{ width: "40px" }} />
      </Link>
    </nav>
  );
}

export default Navbar;
