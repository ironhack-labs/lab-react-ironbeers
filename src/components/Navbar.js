import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <NavLink to="/">
        <img
          className="navbar"
          src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659210099/header-navbar_mimgvj.png"
          alt="home"
        />
      </NavLink>
    </div>
  );
}

export default NavBar;
