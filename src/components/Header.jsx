import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-info">
      <div className="container-fluid d-flex justify-content-center fs-3">
          <Link className="text-white" to={"/"}>
            <IoHome value={{ style: { color: "white" } }} />
          </Link>
      </div>
    </nav>
  );
}

export default Header;
