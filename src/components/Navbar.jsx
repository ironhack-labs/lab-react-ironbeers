import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "blue" }}>
      <Link to="/">
        <img src="../../public/home-icon.png" alt="" />
      </Link>
    </nav>
  );
}

export default Navbar;
