import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={home}></img>
      </Link>
    </nav>
  );
}

export default Header;
