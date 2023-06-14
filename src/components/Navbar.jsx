import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        style={{ backgroundColor: "lightBlue", margin: "5px", padding: "10px" }}
      >
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navbar;
