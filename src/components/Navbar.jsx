import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-black mb-5">
      <Link class="navbar-brand" to={"/"}>
        <img className="mx-3" src={home} />
      </Link>
    </nav>
  );
}

export default Navbar;
