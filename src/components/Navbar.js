// src/components/Navbar.js
 
import { NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;