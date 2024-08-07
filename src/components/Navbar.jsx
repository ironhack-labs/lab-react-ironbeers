import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "cornflowerblue",
        textAlign: "center",
        padding: "10px 40px",
      }}
    >
      <Link to="/">
        <img
          src={homeIcon}
          alt="home icon"
          style={{ height: "30px", width: "auto" }}
        />
      </Link>
      <Link
        to="/beers"
        style={{ margin: "15px", color: "white", textDecoration: "none" }}
      >
        All Beers
      </Link>
      <Link
        to="/random-beer"
        style={{ margin: "15px", color: "white", textDecoration: "none" }}
      >
        Random Beer
      </Link>
      <Link
        to="/new-beer"
        style={{ margin: "15px", color: "white", textDecoration: "none" }}
      >
        Add New Beer
      </Link>
    </nav>
  );
}

export default Navbar;
