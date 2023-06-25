import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">Try a New Beer</NavLink>
      <NavLink to="/new-beer">Add a New Beer</NavLink>
    </nav>
  );
}

export default Navbar;
