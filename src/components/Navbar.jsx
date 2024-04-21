import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-info">
      <div className="container text-white">
        <h1 className="text-white fs-2">LAB | React IronBeers</h1>
        <Link to="/">
          <i className="bi bi-house-door-fill text-white fs-4 mx-2"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
