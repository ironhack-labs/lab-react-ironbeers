import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container d-flex justify-content-center align-items-center">
        <Link to={"/"}>🏠</Link>
      </div>
    </nav>
  );
}

export default Navbar;
