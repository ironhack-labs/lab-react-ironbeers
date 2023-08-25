import { Link } from "react-router-dom";

import homeImg from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={homeImg} alt="home-icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
