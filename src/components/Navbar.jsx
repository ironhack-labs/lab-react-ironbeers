import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <img src={homeIcon} alt="" />
      </Link>
    </nav>
  );
}

export default Navbar;
