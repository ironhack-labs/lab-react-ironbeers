import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to={"/"}>
          <img id="home-icon" src="./src/assets/home-icon.png" />
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
