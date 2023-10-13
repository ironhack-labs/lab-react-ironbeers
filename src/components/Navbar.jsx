import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-info d-flex justify-content-center">
      <Link to={"/"}>
        <img src="/home-icon.png" alt="Home" className="p-2" />
      </Link>
    </nav>
  );
}

export default Navbar;
