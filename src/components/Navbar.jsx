import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container ava-nav">
        <Link to="/" className="ava-links">
          <img src={homeIcon} style={{width: "30px", padding: "2"}} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
