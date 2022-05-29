import { Link } from "react-router-dom";
import HomeButton from "../assets/home.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img className="homeb" src={HomeButton} alt="" />
      </Link>
    </nav>
  );
}

export default Navbar;
