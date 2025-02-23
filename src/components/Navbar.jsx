import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "cornflowerblue", textAlign: "center", padding: "10px 40px" }}>
      <Link to="/">
        <img
          src={homeIcon}
          alt="home icon"
          style={{ height: "30px", width: "auto" }}
        />
      </Link>
      
    </nav>
  );
}

export default Navbar;
