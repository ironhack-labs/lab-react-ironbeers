import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Navbar() {
  return (
    <header>
      <nav
        style={{ backgroundColor: "lightBlue", margin: "5px", padding: "10px" }}
      >
        <Link to="/">
          <img src={home} alt="" className="page-img" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
