import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function Header() {
  return (
    <nav>
      <Link to={"/"}>
        <IoHome />
      </Link>
    </nav>
  );
}

export default Header;
