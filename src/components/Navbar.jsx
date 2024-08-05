import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-bar">
          <div
            style={{
              backgroundColor: "teal",
              color: " #80461b",
              textAlign: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={HomeIcon} alt="" className="home-icon" />
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
