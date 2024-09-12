import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLogo from "../assets/home-icon.png";
import "../index.css"

function Navbar() {
  return (
      <Link to="/">
    <nav>
         <img src={ HomeLogo } alt="homepagelogo"/>
    </nav>
      </Link>
  );
}

export default Navbar;
