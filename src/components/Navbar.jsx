import { NavLink } from "react-router-dom";
import homeButton from "../assets/home_button.png";

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <img className="homeButton" src={homeButton} alt="Home Button" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
