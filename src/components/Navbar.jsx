import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src="./src/assets/home-icon.png" alt="home icon" />
      </Link>
    </nav>
  );
}
export default Navbar;
